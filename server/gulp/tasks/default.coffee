gulp           = require('gulp')
notifier       = require('node-notifier')
spawn          = require('child_process').spawn
node           = false
alreadyRunning = false
watching       = false

gulp.task 'default', () ->
  node.kill if node

  node = spawn 'node', ['src/index.js'], {stdio: 'inherit'}

  if not alreadyRunning
    notifier.notify {
      title: 'Knottie',
      message: 'Server started.',
      icon: 'node_modules/gulp-notify/assets/gulp.png'
    }
    alreadyRunning = true

  if not watching
    gulp.watch ['src/**/*.coffee', 'src/**/*.js'], ['default']
    watching = true

  node.on 'close', (exitCode) ->
    # Exit code 8 is a compile error. Let's wait until they have their act
    # together and let them get back to work.
    if  exitCode is 8
      notifier.notify {
        title: 'Knottie',
        message: 'Stopping for error. Waiting for changes to restart.',
        icon: 'node_modules/gulp-notify/assets/gulp-error.png',
        sound: 'Basso'
      }
      console.log 'Stopping for error. Waiting for changes to restart.'
      alreadyRunning = false

process.on 'exit', () -> node.kill() if node
