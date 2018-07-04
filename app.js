var express = require('express')
var redis = require('ioredis') // eslint-disable-line
var path = require('path')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

var routes = require('./routes/index')
var users = require('./routes/users')

var app = express()

// view engine setup
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'pug')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(cookieParser())
app.use(require('stylus').middleware(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', routes)
app.use('/users', users)

/// error handlers
/// catch 404 and forward to error handler
app.use(logErrors)
app.use(clientErrorHandler)
app.use(errorHandler)
function logErrors(err, req, res, next) {
  console.log('Error Logging', err.stack) // eslint-disable-line
  next(err)
}
function clientErrorHandler(err, req, res, next) {
  if (req.xhr) {
    console.log('Error XHR') // eslint-disable-line
    res.status(500).send({ error: 'Something blew up!' })
  } else {
    console.log('Error Other Client') // eslint-disable-line
    next(err)
  }
}
function errorHandler(err, req, res) {
  res.status(500)
  console.log('Error 500') // eslint-disable-line
  res.send({
    error: err.message
  })
}

app.set('port', process.env.PORT || 3000)

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port) // eslint-disable-line
})

module.exports = app
