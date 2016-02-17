gulp         = require('gulp')
handleErrors = require('../util/handleErrors')
jade         = require('gulp-jade')
argv         = require('minimist')(process.argv.slice(2))

gulp.task 'build:templates', () ->
  return gulp
    .src('./src/jade/index.jade')
    .pipe(jade({
      pretty: !argv.production
    }))
    .on('error', handleErrors)
    .pipe(gulp.dest('./build/'))
