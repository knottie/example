gulp                = require('gulp')
jshint              = require('gulp-jshint')
coffeelint          = require('gulp-coffeelint')
{createPluginError} = require('../../node_modules/gulp-coffeelint/lib/utils')
argv                = require('minimist')(process.argv.slice(2))
map                 = require('map-stream')
through2            = require('through2')
watching            = false

gulp.task 'lint', ['lint:js', 'lint:coffee'], ->
  if argv.watch or argv.w and not watching
    watching = true
    console.log 'Watching...'
    gulp.watch(['src/**', 'test/**'], ['lint'])

gulp.task 'lint:js', ->
  gulp
    .src([
      'src/**/*.js',
      '!src/assets/**/*.js',
      'test/**/*_spec.js'
    ])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter())
    .pipe(new jsNotifyReporter)
    .pipe(jshint.reporter('fail'))

gulp.task 'lint:coffee', ->
  gulp
    .src([
      'src/**/*.coffee',
      'test/**/*_spec.coffee'
    ])
    .pipe(coffeelint())
    .pipe(coffeelint.reporter())
    .pipe(coffeeNofifyReporter())

jsNotifyReporter = ->
  map((file, cb) ->
    if not file.jshint.success

    cb null, file
  )

coffeeNofifyReporter = ->
  through2.obj (file, enc, cb) ->
    if not file.coffeelint or file.coffeelint.success
      @push file
      return cb()

    @emit 'error',
      createPluginError "CoffeeLint failed for #{file.relative}"

    cb()
