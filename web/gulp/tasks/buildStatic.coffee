gulp = require('gulp')

gulp.task 'build:static', () ->
  gulp
    .src('src/static/**')
    .pipe(gulp.dest('build'))
  gulp
    .src('node_modules/bootstrap/dist/fonts/**')
    .pipe(gulp.dest('build/fonts'))
  gulp
    .src('node_modules/font-awesome/fonts/**')
    .pipe(gulp.dest('build/fonts'))
