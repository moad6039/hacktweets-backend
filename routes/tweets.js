var express = require('express');
var router = express.Router();
var Tweet = require("../models/tweets")

/* GET all tweets */
router.get('/', function(req, res, next) {
    Tweet.find()
    .populate('users', 'hashtags')
    .then((tweet) => res.json({tweet: tweet}))
});

/* GET tweets by #hashtag */
router.get('/:hashtag', function(req, res) {
  Tweet.findAll({hashtag: req.params.hashtag})
  .then((tweets) => res.json({result: true, tweets: tweets}))
})

module.exports = router;
