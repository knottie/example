_       = require('lodash')
chai    = require('chai')
request = require('supertest')
server  = require('../src/server')

global.expect  = chai.expect
global.request = request
global.server  = server
require('../src/routes')

chai.use require('sinon-chai')
