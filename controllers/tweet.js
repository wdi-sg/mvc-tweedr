module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let tweetAddControllerCallback = (request, response) => {
    //response.send(request.body);
    let user=request.body;
         db.tweet.tweet(user,(error, users) => {
        //response.send(data);
            response.redirect("/");

      });

  };

  let showAllTweet = (request, response) => {
    //response.send("I am going to show you all tweet");
         db.tweet.alltweet((error, tweets) => {
        const data = {}
        data.tweets=tweets;
        data.name = request.cookies.username;
        console.log(data);
        response.render("tweets/alltweets", data);
      });

  };

  let showOneTweet = (request, response) => {
    //response.send("I am going to show you one tweet");
    //let user=request.body;
    let id = parseInt(request.params.id);
    console.log("id is" + id);
        db.tweet.onetweet(id, (error, tweets) => {
        const data = {}
        data.tweets=tweets;

        data.name = request.cookies.username;
               console.log(data);
        //response.send(data);
        response.render("tweets/singleTweet", data);
      });

  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    tweetAdd: tweetAddControllerCallback,
    showAllTweet: showAllTweet,
    showOneTweet: showOneTweet,
  };

}