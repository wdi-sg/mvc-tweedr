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
      // console.log(result.rows);
      // let obj = {
      //   tweet: result.rows[0]
      // };
      // response.render("./tweets/display-one-tweet", obj);
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

  return {
    displayNewTweetForm: displayNewTweetForm,
    submitNewTweet: submitNewTweet,
    showOneTweet: showOneTweet,
  };
};
