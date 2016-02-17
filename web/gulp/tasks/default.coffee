gulp        = require('gulp')
browserSync = require('browser-sync')

gulp.task 'default', ['setWatch', 'build'], () ->
  gulp.watch 'src/static/**', ['buildStatic']
  gulp.watch 'src/less/**', ['buildStyles']
  gulp.watch 'src/jade/**', ['buildTemplates']
  browserSync.init(
    ['build/**'], {
      server: {
        baseDir: 'build'
      }
    }
  )
