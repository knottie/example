gulp = require('gulp')

gulp.task 'build', [
  'build:scripts'
  'build:static'
  'build:styles'
  'build:templates'
]
