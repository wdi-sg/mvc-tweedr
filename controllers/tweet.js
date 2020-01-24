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
    db.tweets.setTweet(1,request.body.message,(err)=>{
        response.send('Updated');
    })
  };
  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    makeTweet,
    addTweet,
  };

}