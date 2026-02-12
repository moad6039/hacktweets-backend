const mongoose = require("mongoose");


const tweetSchema = mongoose.Schema({
    message: String, 
    nbLike: Number,
    time : Date,
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'users',
        require: true

    },
    hashtag: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'hashtags',
        require: true
    }
})

const Tweet = mongoose.model("tweets", tweetSchema);

module.exports = Tweet;