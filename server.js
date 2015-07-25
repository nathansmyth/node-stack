var express = require('express');
var redis = require('ioredis');

var app = express();
// var redis = new Redis('/tmp/redis.sock');

app.get('/', function(req, res){
  res.send('Hello World');
});
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.send(500, 'Something broke!');
});

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port %d', server.address().port);
});
