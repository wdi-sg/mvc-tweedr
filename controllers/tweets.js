module.exports = (db) => {

  /**
   *===========================================
   * Controller logic
   * ===========================================
   */

  let tweetsControllerCallback = (req, res) => {
    console.log("check for cookies");
    if(req.cookies.loggedin === undefined){
        res.redirect('/tweedr');
    }else{
        var getTweets = (error, allTweets) => {
        res.render('homepage', {tweets: allTweets});
      };
      db.tweets.getAllTweets(getTweets);
    }
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