const common = require("./common");

module.exports = (db) => {

  let displayNewTweetForm = (request, response) => {
    response.render("./tweets/new-tweet")
  };


  let submitNewTweet = (request, response) => {
    console.log(request.body);
    let content = request.body.content;
    let userid = parseInt(request.cookies.userid);
    let timestamp = Date.now();
    let cbDisplayNewTweet = (err, result) => {
      console.log(result.rows);
    }
    db.tweets.writeNewTweet(content, userid, timestamp, cbDisplayNewTweet);
  }

  return {
    displayNewTweetForm: displayNewTweetForm,
    submitNewTweet: submitNewTweet
  };

}
