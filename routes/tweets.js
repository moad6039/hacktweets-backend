var express = require('express');
var router = express.Router();
var Tweet = require("../models/tweets")

/* GET home page. */
router.get('/', function(req, res, next) {
    Tweet.find()
    .then((tweet) => res.json({tweet: tweet}))
});

/* GET #hashtag */
router.get('/:hashtag', function(req, res) {
  Tweet.findAll({hashtag: req.params.hashtag})
  .then((tweets) => res.json({result: true, tweets: tweets}))
})

module.exports = router;
