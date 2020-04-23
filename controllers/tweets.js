const common = require("./common");

module.exports = (db) => {
  let displayNewTweetForm = (request, response) => {
    let cbGetHtOptions = (err, result) => {
      console.log(result.rows);
      let obj = {
        htArr: result.rows,
      };
      response.render("./tweets/new-tweet", obj);
    };
    db.hashtags.viewAllHashtags(cbGetHtOptions);
  };

  let submitNewTweet = (request, response) => {
    console.log(request.body);
    let content = request.body.content;
    let userid = parseInt(request.cookies.userid);
    let timestamp = Date.now();
    let hashtagArr = request.body.hashtag;
    let tweetId;

    let cbDoNth = (err, result) => {};

    let cbDisplayNewTweet = (err, result) => {
      tweetId = result.rows[0].id;
      db.tweets.writeTweetAndHt(hashtagArr, tweetId, cbDoNth);
      // response.redirect();
    };
    db.tweets.writeNewTweet(content, userid, timestamp, cbDisplayNewTweet);
  };

  let showOneTweet = (request, response) => {
    let id = parseInt(request.params.id);
    let cbDisplayOneTweet = (err, result) => {
      console.log(result.rows);
      let obj = {
        tweetArr: result.rows
      };
      response.render("./tweets/display-one-tweet", obj);
    };
    db.tweets.getOneTweet(id, cbDisplayOneTweet);
  };

  let showAllTweets = (request, response) => {
    let cbGetAllTweets = (err, result) => {
      let obj = {
        tweetArr: result.rows,
      };
      console.log(obj);
      response.render("./tweets/display-all-tweet", obj);
    };
    db.tweets.getAllTweets(cbGetAllTweets);
  };

  return {
    displayNewTweetForm: displayNewTweetForm,
    submitNewTweet: submitNewTweet,
    showOneTweet: showOneTweet,
    showAllTweets: showAllTweets,
  };
};
