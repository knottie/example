import server from './server'
import routes from './routes'

const port = 5002
server.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
