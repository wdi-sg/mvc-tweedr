const db = require('../db.js');

module.exports.getTweet = async (req, res) => {

    res.send('Get Tweet');
}

module.exports.getAllTweets = async (req, res) => {

    res.send('Get All Tweets');
}

module.exports.postAddTweet = async (req, res) => {

    res.send('Post Add Tweet');
}

module.exports.deleteTweet = async (req, res) => {

    res.send('Delete Tweet');
}