var gulp  = require('gulp');

gulp.task('setWatch', function() {
  global.knottie = global.knottie || {};
  global.knottie.isWatching = true;
});
