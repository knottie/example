var gulp = require('gulp');
var handleErrors = require('../util/handleErrors');
var less = require('gulp-less');
var argv = require('minimist')(process.argv.slice(2));

gulp.task('buildStyles', function() {
    return gulp
      .src('./src/less/index.less')
      .pipe(less({
        compress: argv.production
      }))
      .pipe(gulp.dest('./build/'))
      .on('error', handleErrors);
});
