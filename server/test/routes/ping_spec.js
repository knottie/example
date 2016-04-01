describe('#GET /ping', () => {

  it('should respond with HTTP 200', (done) => {
    request(server)
      .get('/ping')
      .expect(200)
      .end((err, res) => {
        done(err)
      })
  })

})
