module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let tweetsControllerCallback = (request, response) => {
    console.log("inside controller");
    var getTweets = (error, allTweets) => {
        response.render('homepage', {tweets: allTweets});
      };
      db.tweets.getAllTweets(getTweets);
  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: tweetsControllerCallback,
  };

}