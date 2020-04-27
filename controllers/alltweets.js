module.exports = (db) => {
  var sha256 = require("js-sha256");

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let allTweetsCallback = (request, response) => {
    const whenDoneInModel = (error, result) => {
      if (error) {
        console.log("ERRROOORR from alltweets.js controller");
        console.log(error);
      } else {
        const data = {
          tweetDetails: result,
        };
        console.log(result);
        response.render("allTweets", data);
      }
    };
    db.allTweetsModel.allTweets(whenDoneInModel);
  };
  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    allTweetsCallback: allTweetsCallback,
  };
};
