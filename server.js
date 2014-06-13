var express = require('express');
var app = express();

app.get('/hello.txt', function(req, res){
  res.send('Hello World');
});
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.send(500, 'Something broke!');
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
