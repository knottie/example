os = require('os')

m = module.exports = {}

m.sayHello = (req, res, next) ->
  res.send 200, { hello: 'Bill' }
  return next()

m.getArch = (req, res, next) ->
  res.send 200, os.arch()
  return next()
