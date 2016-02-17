gulp = require('gulp')

gulp.task 'setWatch', () ->
  global.knottie = global.knottie or {}
  global.knottie.isWatching = true
