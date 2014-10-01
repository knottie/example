'use strict';

var expect = require('chai').expect;
var configureChai = require('../configureChai');
var request = require('supertest');

var server = require('../../src/server');
require('../../src/routes');

describe('Hello Routes', function() {

  describe('#GET /hello', function() {

    it('should respond with HTTP 200', function(done) {
      request(server)
        .get('/hello')
        .set('Accept', 'application/json')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect({hello: 'Bill'})
        .end(function(err, res){
          if (err) return done(err);
          done()
        });
    });

  });

});
