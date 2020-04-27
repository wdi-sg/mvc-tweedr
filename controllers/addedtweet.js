module.exports = (db) => {
  var sha256 = require("js-sha256");

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let addedtweetCallback = (request, response) => {
    const whenDoneInModel = (error, result) => {
      if (error) {
        console.log("ERRROOORR from addedtweet.js controller");
        console.log(error);
      } else {
        const data = {
          tweet: request.body.tweet,
          user: request.body.user_id,
        };
        response.render("addedTweet", data);
      }
    };
    const values = [request.body.user_id, request.body.tweet];

    db.addedTweetModel.addTweet(values, whenDoneInModel);
  };
  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    addedtweetCallback: addedtweetCallback,
  };
};
