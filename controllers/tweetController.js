module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let allTweetsControllerCallback = (request, response) => {
      var callback = function (error,results) {
        if (results===null){
            response.send("404");
        } else {
        response.render('home', results);
        // response.send(results);
        // console.log(results)
    }
      };

      db.tweets.getAll(callback);
  };

  let singleTweetControllerCallback = (request, response) => {
      var callback = function (error,results) {
        if (results===null){
            response.send("404");
        } else {
        response.send(results[0].content);
        }
      };

      db.tweets.getSingle(callback,request.params.id);
  };

  let followingTweetControllerCallback = (request, response) => {
      var callback = function (error,results) {
        if (results===null){
            response.send("404");
        } else {
        response.render('userHomepage', results);
        }
      };

      db.tweets.getUsersTweets(callback,request.params.id);
  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    getAllTweets: allTweetsControllerCallback,
    getSingleTweet: singleTweetControllerCallback,
    showFollowingTweets: followingTweetControllerCallback
  };

}