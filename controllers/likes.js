const common = require("./common");

module.exports = (db) => {
  
  let writeNewLikeOrUnlike = (request, response) => {
    let currentUserId = parseInt(request.cookies.userid);
    let tweetId = request.body.tweet_id;
    let cbToggle = (obj) => {
      console.log(obj);
      response.send(obj);
    }
    db.likes.toggle(currentUserId, tweetId, cbToggle);
  };

  return {
    writeNewLikeOrUnlike: writeNewLikeOrUnlike
  };
};
