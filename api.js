var express = require('express');
var redis = require('ioredis');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var endpoints = require('./routes/endpoints');
var users = require('./routes/users');

var api = express();
// var redis = new Redis('/tmp/redis.sock');

// view engine setup
api.set('views', path.join(__dirname, 'views'));
api.set('view engine', 'jade');

api.use(bodyParser.json());
api.use(bodyParser.urlencoded());
api.use(cookieParser());

api.get('/', function(req, res){
  res.send('Hello World');
});
api.use(function(err, req, res, next){
  console.error(err.stack);
  res.send(500, 'Something broke!');
});

api.set('port', process.env.PORT || 5000);
api.set('env', 'development');

var server = api.listen(api.get('port'), function() {
  console.log('Listening on port %d', server.address().port);
});

api.use(express.static(path.join(__dirname, 'public')));

api.use('/', endpoints);
api.use('/users', users);

/// error handlers

/// catch 404 and forward to error handler
api.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (api.get('env') === 'development') {
  api.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
api.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = api;
