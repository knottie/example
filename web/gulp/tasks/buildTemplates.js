var gulp = require('gulp');
var handleErrors = require('../util/handleErrors');
var jade = require('gulp-jade');
var argv = require('minimist')(process.argv.slice(2));

gulp.task('buildTemplates', function() {
  return gulp
    .src('./src/jade/index.jade')
    .pipe(jade({
      pretty: !argv.production
    }))
    .on('error', handleErrors)
    .pipe(gulp.dest('./build/'));
});
