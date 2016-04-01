import _ from 'lodash'
import chai from 'chai'
import request from 'supertest'
import server from '../src/server'
import sinonChai from 'sinon-chai'

global.expect  = chai.expect
global.request = request
global.server  = server
import '../src/routes'

chai.use(sinonChai)
