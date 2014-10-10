var gulp = require('gulp');
var notifier = require('node-notifier');
var spawn = require('child_process').spawn;
var node = false;
var alreadyRunning = false;
var watching = false;

gulp.task('default', function() {
  if (node) {
    node.kill();
  }

  node = spawn('node', ['src/index.js'], {stdio: 'inherit'});

  if (!alreadyRunning) {
    notifier.notify({
      title: 'Knottie',
      message: 'Server started.',
      icon: 'node_modules/gulp-notify/assets/gulp.png'
    });
    alreadyRunning = true;
  }

  node.on('close', function(exitCode) {
    // Exit code 8 is a compile error. Let's wait until they have their act
    // together and let them get back to work.
    if (exitCode === 8) {
      notifier.notify({
        title: 'Knottie',
        message: 'Stopping for error. Waiting for changes to restart.',
        icon: 'node_modules/gulp-notify/assets/gulp-error.png',
        sound: 'Basso'
      });
      console.log('Stopping for error. Waiting for changes to restart.');
      alreadyRunning = false;
    }
  });

  if (!watching) {
    gulp.watch('src/**/*.js', ['default']);
    watching = true;
  }
});

process.on('exit', function() {
  if (node) {
    node.kill();
  }
});
