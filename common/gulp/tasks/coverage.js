var gulp = require('gulp'),
    istanbul = require('gulp-istanbul'),
    mocha = require('gulp-mocha');

gulp.task('coverage', function(cb) {
  gulp
    .src('src/**/*.js')
    .pipe(istanbul({includeUntested: true}))
    .on('finish', function() {
      gulp
        .src('test/**/*.js', {read: false})
        .pipe(mocha({reporter: 'spec'}))
        .pipe(istanbul.writeReports())
        .on('end', cb);
    });
});
