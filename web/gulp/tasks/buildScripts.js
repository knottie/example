var gulp = require('gulp');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');
var gulpif = require('gulp-if');
var bundleLogger = require('../util/bundleLogger');
var handleErrors = require('../util/handleErrors');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var argv = require('minimist')(process.argv.slice(2));

gulp.task('buildScripts', function() {
  var isWatching = false;
  if (global.knottie && global.knottie.isWatching) {
    isWatching = global.knottie.isWatching;
  }

  var bundler = browserify({
    entries: './src/javascript/index.js',
    extensions: [],
    debug: !argv.production,
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
      .pipe(gulpif(argv.production, streamify(uglify())))
      .pipe(gulp.dest('./build/'))
      .on('end', bundleLogger.end);
  };

  if (isWatching) {
    bundler = watchify(bundler);
    bundler.on('update', bundle);
  }

  return bundle();
});
