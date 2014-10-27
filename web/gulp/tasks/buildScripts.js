var gulp = require('gulp');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');
var gulpif = require('gulp-if');
var bundleLogger = require('../util/bundleLogger');
var handleErrors = require('../util/handleErrors');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
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
    fullPaths: true,
  });

  bundler.transform(reactify);

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

/*

  var props = {entries: [scriptsDir + '/' + file]};
  var bundler = watch ? watchify(props) : browserify(props);
  bundler.transform(reactify);
  function rebundle() {
    var stream = bundler.bundle({debug: true});
    return stream.on('error', handleErrors)
    .pipe(source(file))
    .pipe(gulp.dest(buildDir + '/'));
  }
  bundler.on('update', function() {
    rebundle();
    gutil.log('Rebundle...');
  });
  return rebundle();

*/
