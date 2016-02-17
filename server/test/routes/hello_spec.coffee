describe 'Hello Routes', () ->

  describe '#GET /hello', () ->

    it 'should respond with HTTP 200', (done) ->
      request server
        .get '/hello'
        .set 'Accept', 'application/json'
        .expect 200
        .expect 'Content-Type', /json/
        .expect {hello: 'Bill'}
        .end (err, res) ->
          done err
