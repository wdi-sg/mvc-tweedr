module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let makeTweet= (request, response) => {
        response.render("tweet/makeTweet");
  };
  let addTweet =(request, response) => {
    db.tweets.setTweet(request.cookies.user_id,request.body.message,(err)=>{
        response.redirect('/tweet');
    });
  };
  let listTweet = (request,response) => {
    db.tweets.getTweets((err, tweets)=>{
        const data = {
            tweets: tweets,
        }
        response.render("tweet/listTweets", data);
    });
  };
  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    makeTweet,
    addTweet,
    listTweet
  };

}