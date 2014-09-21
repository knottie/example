var gulp = require('gulp');

gulp.task('build', [
  'buildScripts',
  'buildStatic',
  'buildStyles',
  'buildTemplates'
]);
