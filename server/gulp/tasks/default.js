var gulp = require('gulp');
var notifier = require('node-notifier');
var spawn = require('child_process').spawn;
var node = false;

gulp.task('default', function() {
  if (node) {
    node.kill();
  }
  node = spawn('node', ['src/index.js'], {stdio: 'inherit'});
  notifier.notify({
    title: 'Knottie',
    message: 'Server started.'
  });
  node.on('close', function(exit_code) {
    // Exit code 8 is a compile error. Let's wait until they have their act
    // together and let them get back to work.
    if (exit_code === 8) {
      notifier.notify({
        title: 'Knottie',
        message: 'Stopping for error. Waiting for changes to restart.',
        sound: 'Basso'
      });
      console.log('Stopping for error. Waiting for changes to restart.');
    }
  });

  gulp.watch('src/**/*.js', ['default']);
});

process.on('exit', function() {
  if (node) {
    node.kill();
  }
});
