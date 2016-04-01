// Keep the routes in a single file because the order the routes are attached
// to the server is important. By loading them as files you would have to
// ensure your file names sorted correctly and you'd potentially need to break
// apart routes that would otherwise belong in the same file just so they would
// load in the correct order.

import server from './server'

server.get('/ping', (req, res, next) => {
  res.send(200)
  next()
})
