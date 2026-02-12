var express = require("express");
var router = express.Router();
var Tweet = require("../models/tweets");
const Hashtag = require("../models/hashtags");

/* GET all tweets */
router.get("/", function (req, res, next) {
  Tweet.find()
    .populate("user")
    .populate("hashtag")
    .then((tweet) => res.json({ tweet: tweet }));
});


module.exports = router;
