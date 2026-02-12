var express = require("express");
var router = express.Router();
var Tweet = require("../models/tweets");
const Hashtag = require("../models/hashtags");

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

/* Get all hashtags */
router.get("/", function(req, res) {
    Hashtag.find()
    .then((hashtags) => res.json({hashtags: hashtags}))
});

module.exports = router;