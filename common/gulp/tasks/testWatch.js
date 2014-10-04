/*
 * For growl support on OS X install terminal-notifier:
 * sudo gem install terminal-notifier
*/
var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('testWatch', function() {
  // Run the tests immediately.
  gulp
    .src('test/**/*_spec.js', {read: false})
    .pipe(mocha({
      reporter: 'min',
      ui: 'bdd',
      growl: true
    }))
    .on('error', function() {});

  // Now start the watcher and run them on file changes.
  return gulp
    .watch(['src/**',  'test/**'], function() {
      return gulp
        .src('test/**/*_spec.js', {read: false})
        .pipe(mocha({
          reporter: 'min',
          ui: 'bdd',
          growl: true
        }))
        .on('error', function() {});
    });
});
