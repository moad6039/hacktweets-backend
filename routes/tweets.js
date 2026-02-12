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

/* GET tweets by #hashtag */
router.get("/:hashtag", function (req, res) {
  Hashtag.find({ name: req.params.hashtag }).then((data) => {
    console.log("data", data);
    if (data.length > 0) {
      res.json({ result: true, tweets: data });
    } else {
      res.json({ result: false, error: "hashtag not found" });
    }
  });
});

module.exports = router;
