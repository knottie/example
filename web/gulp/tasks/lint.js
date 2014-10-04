var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('lint', function () {
  return gulp
    .src([
      'src/**/*.js',
      'test/**/*_spec.js'
    ])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default', {
        verbose: true
    }))
    .pipe(jshint.reporter('fail'));
});
