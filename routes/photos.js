var express = require('express');
var Redis = require('ioredis');
var router = express.Router();
var redis_connection = {
  port: process.env.REDIS_PORT,
  host: process.env.REDIS_HOST,
  family: 4,  // 4 (IPv4) or 6 (IPv6)
  username: process.env.REDIS_USER,
  password: process.env.REDIS_PASS,
  db: process.env.REDIS_DB
};
var photosRedis = new Redis({
  keyPrefix: 'photos:'
});

/* GET photos listing. */
router.get('/', function(req, res) {
  res.json({pho:'tos!'});
});

router.get('/redis', function(req, res){
  redis.ping(function (err, result) {
    res.send(result + ' from Redis');
  });
});

module.exports = router;
