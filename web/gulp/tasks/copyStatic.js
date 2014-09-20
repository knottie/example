var gulp = require('gulp');

//gulp.task('copyStatic', ['copyBootstrapFonts', 'copyFontAwesomeFonts'], function() {
gulp.task('copyStatic', function() {
  return gulp.src('src/static/**')
    .pipe(gulp.dest('build'));
});
