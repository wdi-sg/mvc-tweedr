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
  /*      const data = {}
        data.users=users;
        console.log(data);
        //response.send(data);
            response.redirect("/");*/
            response.redirect("/");
        //response.send("Success ");
        //response.render("user/allusers", data);
      });

  };

  let showAllTweet = (request, response) => {
    //response.send("I am going to show you all tweet");
    //let user=request.body;
         db.tweet.alltweet((error, tweets) => {
        const data = {}
        data.tweets=tweets;

        data.name = request.cookies.username;
               console.log(data);
        //response.send(data);

        response.render("tweets/alltweets", data);
      });

  };

  let showOneTweet = (request, response) => {
    response.send("I am going to show you one tweet");
    //let user=request.body;
    /*     db.tweet.alltweet((error, tweets) => {
        const data = {}
        data.tweets=tweets;

        data.name = request.cookies.username;
               console.log(data);
        //response.send(data);

        response.render("tweets/alltweets", data);
      });*/

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