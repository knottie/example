var gulp = require('gulp'),
    handleErrors = require('../util/handleErrors'),
    less = require('gulp-less');

gulp.task('buildStyles', function() {
    return gulp.src('./src/less/index.less')
        .pipe(less())
        .pipe(gulp.dest('./build/'))
        .on('error', handleErrors);
});
