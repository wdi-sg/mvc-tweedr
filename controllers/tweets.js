module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let indexControllerCallback = (request, response) => {
      db.tweets.getAll((error, allTweets) => {
        response.render('tweets/index', { allTweets });
      });
  };

  let registerControllerCallback = (request, response) => {
    response.render('tweets/register');
      // db.tweets.getAll((error, allTweets) => {
      //   response.render('/tweets/register', { allTweets });
      // });
  };
  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
    register: registerControllerCallback,
  };

}