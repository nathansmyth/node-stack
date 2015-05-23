var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'lists' });
});

router.get('/lists.json', function(req, res) {
  res.send('lists');
});

module.exports = router;
