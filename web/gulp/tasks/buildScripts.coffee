gulp         = require('gulp')
uglify       = require('gulp-uglify')
streamify    = require('gulp-streamify')
gulpif       = require('gulp-if')
bundleLogger = require('../util/bundleLogger')
handleErrors = require('../util/handleErrors')
source       = require('vinyl-source-stream')
browserify   = require('browserify')
coffeeify    = require('coffeeify')
watchify     = require('watchify')
argv         = require('minimist')(process.argv.slice(2))

gulp.task 'build:scripts', () ->
  isWatching = false
  if global.knottie?.isWatching
    isWatching = global.knottie.isWatching

  bundler = browserify({
    entries: './src/javascript/index.coffee',
    extensions: ['.coffee'],
    debug: !argv.production,
    cache: {},
    packageCache: {},
    fullPaths: true
  }).transform(coffeeify, { bare: false, header: true })

  bundle = () ->
    bundleLogger.start()
    return bundler
      .bundle()
      .on('error', handleErrors)
      .pipe(source('index.js'))
      .pipe(gulpif(argv.production, streamify(uglify())))
      .pipe(gulp.dest('./build/'))
      .on('end', bundleLogger.end)

  if isWatching
    bundler = watchify(bundler)
    bundler.on('update', bundle)

  return bundle()
