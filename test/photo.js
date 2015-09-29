var should = require('chai').should(),
    expect = require('chai').expect,
    supertest = require('supertest'),
    api = supertest('http://localhost:5000/photos');

describe('Photo', function() {
  
  it('root returns 200 json response', function(done) {
    api.get('/')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });

});
