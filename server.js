var express = require('express');
var redis = require('ioredis');

var api = express();
// var redis = new Redis('/tmp/redis.sock');

api.get('/', function(req, res){
  res.send('Hello World');
});
api.use(function(err, req, res, next){
  console.error(err.stack);
  res.send(500, 'Something broke!');
});

api.set('port', process.env.PORT || 3000);

var server = api.listen(api.get('port'), function() {
  console.log('Listening on port %d', server.address().port);
});
