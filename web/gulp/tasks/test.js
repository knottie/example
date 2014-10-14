var gulp = require('gulp');
var karma = require('karma').server;
var argv = require('minimist')(process.argv.slice(2));

gulp.task('test', function (done) {
  karma.start({
    //configFile: __dirname + '/karma.conf.js',
    reporters: ['progress', 'notify'],
    browsers: [
      'Chrome',
      'Safari'
    ],
    frameworks: ['mocha', 'browserify'],
    browserify: {
      files: [
        //'src/**/*.js',
        'test/**/*_spec.js'
      ]
    },
    preprocessors: {
      //'src/**/*.js' : ['browserify'],
      'test/**/*_spec.js': ['browserify']
    },
    files: [
      //'src/**/*.js',
      'test/**/*_spec.js'
    ],
    singleRun: !argv.watch
  }, done);
});
