var gulp = require('gulp'),
    jshint = require('gulp-jshint');

gulp.task('lint', function (cb) {
  return gulp
    .src('src/**/*.js', {read: false})
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default', {
        verbose: true
    }))
    //FIXME: This should be failing the build.
    .pipe(jshint.reporter('fail'));
});
