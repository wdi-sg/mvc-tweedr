const sha256 = require('js-sha256');
const SALT = "saltCookie";

module.exports = (db) => {
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */
  const isLoggedIn = (request) => {
     let user_id = request.cookies.user_id;
     let hashedCookie = sha256(SALT+user_id);
     return ( request.cookies.loggedIn === hashedCookie) ? true : false;
  }

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
            tweets: tweets
        };
        if(isLoggedIn(request)){
        data.loggedin = "true"
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