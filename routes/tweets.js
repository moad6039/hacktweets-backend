var express = require("express");
var router = express.Router();
var Tweet = require("../models/tweets");
const { checkBody } = require("../modules/checkBody");

/* GET all tweets */
router.get("/", function (req, res, next) {
  Tweet.find()
    .populate("user")
    .populate("hashtag")
    .then((tweet) => res.json({ tweet: tweet }));
});

/* POST create tweet */
router.post("/", function (req, res) {
  if (!req.body.message) {
    res.json({ result: false, error: 'empty fields' });
    return;
  }

  const newTweet = new Tweet({
        message: req.body.message,
        nbLike: req.body.nbLike,
        time: req.body.time,
        user: req.body.user,
        hashtag: req.body.hashtag
      });
  newTweet.save().then(data => {
        res.json({ result: true });
      });

})

module.exports = router;
