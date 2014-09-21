var gulp = require('gulp'),
    bundleLogger = require('../util/bundleLogger'),
    handleErrors = require('../util/handleErrors'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    watchify = require('watchify');

gulp.task('buildScripts', function() {
  var isWatching = false;
  if (global.knottie && global.knottie.isWatching) {
    isWatching = global.knottie.isWatching;
  }

  var bundler = browserify({
    entries: './src/javascript/index.js',
    extensions: [],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  });

  var bundle = function bundle() {
    bundleLogger.start();
    return bundler
      .bundle()
      .on('error', handleErrors)
      .pipe(source('index.js'))
      .pipe(gulp.dest('./build/'))
      .on('end', bundleLogger.end);
  };

  if (isWatching) {
    bundler = watchify(bundler);
    bundler.on('update', bundle);
  }

  return bundle();
});
