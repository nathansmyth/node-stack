var express = require('express');
var router = express.Router();

var endpoints =  [
  ['/', 'index'],
  ['/music/', 'music'],
  ['/recordings/', 'recordings'],
  ['/sounds/', 'sounds'],
  ['/photos/', 'photos'],
  ['/videos/', 'videos'],
  ['/stories/', 'stories'],
  ['/interests/', 'interests']
];

// GET home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'endpoints' });
});

// GET json representation of endpoints
router.get('/endpoints.json', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ a: 1 }, null, 3));
});

module.exports = router;
