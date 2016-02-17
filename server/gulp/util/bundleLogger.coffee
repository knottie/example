gutil        = require('gulp-util')
prettyHrtime = require('pretty-hrtime')
startTime    = false

m = module.exports = {}

m.start = () ->
  startTime = process.hrtime()
  gutil.log "Running #{gutil.colors.green("'bundle'")}..."

m.end = () ->
  taskTime = process.hrtime(startTime)
  prettyTime = prettyHrtime(taskTime)
  gutil.log "Finished #{gutil.colors.green("'bundle'")} in #{gutil.colors.magenta(prettyTime)}"
