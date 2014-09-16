var gutil = require('gulp-util'),
    prettyHrtime = require('pretty-hrtime'),
    startTime;

var m = {};

m.start = function start() {
  startTime = process.hrtime();
  gutil.log('Running', gutil.colors.green("'bundle'") + '...');
};

m.end = function end() {
  var taskTime = process.hrtime(startTime),
      prettyTime = prettyHrtime(taskTime);
  gutil.log('Finished', gutil.colors.green("'bundle'"), 'in', gutil.colors.magenta(prettyTime));
};

module.exports = m;
