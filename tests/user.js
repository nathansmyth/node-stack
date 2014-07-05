  describe('Creating a new User',function(){
    var user;

    before(function(done){
      User.create({ username: 'test' , function(err,u){
        user = u;
        done();        
      });
    });

    it('should have a username',function(){
      user.should.have.property('username','test');
    });
  });

