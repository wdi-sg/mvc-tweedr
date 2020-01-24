module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let makeTweet= (request, response) => {
        response.render("tweet/makeTweet");
  };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    makeTweet,
  };

}