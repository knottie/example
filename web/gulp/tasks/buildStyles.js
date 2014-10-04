var gulp = require('gulp');
var handleErrors = require('../util/handleErrors');
var less = require('gulp-less');

gulp.task('buildStyles', function() {
    return gulp
      .src('./src/less/index.less')
      .pipe(less())
      .pipe(gulp.dest('./build/'))
      .on('error', handleErrors);
});
