var express = require('express');
var redis = require('ioredis');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

/// error handlers
/// catch 404 and forward to error handler
www.use(logErrors);
www.use(clientErrorHandler);
www.use(errorHandler);
function logErrors(err, req, res, next) {
  console.log('Error Logging', err.stack);
  next(err);
}
function clientErrorHandler(err, req, res, next) {
  if (req.xhr) {
    console.log('Error XHR');
    res.status(500).send({ error: 'Something blew up!' });
  } else {
    console.log('Error Other Client');
    next(err);
  }
}
function errorHandler(err, req, res, next) {
  res.status(500);
  console.log('Error 500');
  res.send({
    error: err.message
  });
}

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});

module.exports = app;
