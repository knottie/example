gulp        = require('gulp')
browserSync = require('browser-sync')

gulp.task 'default', ['setWatch', 'build'], () ->
  gulp.watch 'src/static/**', ['build:static']
  gulp.watch 'src/less/**', ['build:styles']
  gulp.watch 'src/jade/**', ['build:templates']
  browserSync.init(
    ['build/**'], {
      server: {
        baseDir: 'build'
      }
    }
  )
