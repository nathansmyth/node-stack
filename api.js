require('dotenv').load();

var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var endpoints = require('./routes/endpoints');
var users = require('./routes/users');
// var photos = require('./routes/photos');

var api = express();

// view engine setup
api.set('views', path.join(__dirname, 'views'));
api.set('view engine', 'jade');

api.use(bodyParser.json());
// api.use(bodyParser.urlencoded());
api.use(cookieParser());

api.set('port', process.env.port || 5000);
api.set('env', process.env.env || 'development');

var server = api.listen(api.get('port'), function() {
  console.log('Listening on port %d', server.address().port);
});

api.use(express.static(path.join(__dirname, 'public')));

api.use('/', endpoints);
api.use('/users', users);
// api.use('/photos', photos);

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
