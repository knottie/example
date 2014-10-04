var gulp = require('gulp');
var jade = require('gulp-jade');

gulp.task('buildTemplates', function() {
  return gulp
    .src('./src/jade/index.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('./build'))
});
