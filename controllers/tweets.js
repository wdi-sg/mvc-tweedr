const common = require("./common");

module.exports = (db) => {
  let displayNewTweetForm = (request, response) => {
    response.render("./tweets/new-tweet");
  };

  let submitNewTweet = (request, response) => {
    console.log(request.body);
    let content = request.body.content;
    let userid = parseInt(request.cookies.userid);
    let timestamp = Date.now();
    let cbDisplayNewTweet = (err, result) => {
      let link = "/tweets/" + result.rows[0].id;
      response.redirect(link);
    };
    db.tweets.writeNewTweet(content, userid, timestamp, cbDisplayNewTweet);
  };

  let showOneTweet = (request, response) => {
    let id = parseInt(request.params.id);
    let cbDisplayOneTweet = (err, result) => {
      let obj = {
        tweet: result.rows[0],
      };
      console.log("obj:", obj);
      response.render("./tweets/display-one-tweet", obj);
    };
    db.tweets.getOneTweet(id, cbDisplayOneTweet);
  };

  let showAllTweets = (request, response) => {
    let cbGetAllTweets = (err, result) => {
      let obj = {
        tweetArr: result.rows
      };
      console.log(obj);
      response.render("./tweets/display-all-tweet", obj);
    }
    db.tweets.getAllTweets(cbGetAllTweets);
  };

  return {
    displayNewTweetForm: displayNewTweetForm,
    submitNewTweet: submitNewTweet,
    showOneTweet: showOneTweet,
    showAllTweets: showAllTweets
  };
};
