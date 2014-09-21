var gulp = require('gulp');

//gulp.task('copyStatic', ['copyBootstrapFonts', 'copyFontAwesomeFonts'], function() {
gulp.task('buildStatic', function() {
  return gulp.src('src/static/**')
    .pipe(gulp.dest('build'));
});
