var gulp = require('gulp'),
    mocha = require('gulp-mocha');

gulp.task('test', function() {
  return gulp
    .src('test/**/*_spec.js', {read: false})
    .pipe(mocha({
      reporter: 'nyan',
      ui: 'bdd'
    }));
});
