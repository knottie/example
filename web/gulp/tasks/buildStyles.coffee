gulp         = require('gulp')
handleErrors = require('../util/handleErrors')
less         = require('gulp-less')
argv         = require('minimist')(process.argv.slice(2))

gulp.task 'build:styles', () ->
  return gulp
    .src('./src/less/index.less')
    .pipe(less({
      compress: argv.production
    }))
    .on('error', handleErrors)
    .pipe(gulp.dest('./build/'))
