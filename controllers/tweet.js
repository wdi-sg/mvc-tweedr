module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let indexControllerCallback = (request, response) => {
      db.tweet.getTweets((error, allTweedrs) => {
        response.render('tweedr/index', { allTweedrs });
        console.log("printing out all Tweets belowwwww: ...")
        console.log(allTweedrs);
      });
  };

  let registerControllerCallback = (request, response)=>{
    db.tweet.getUsers((error,allUsers)=>{
      response.render('tweedr/register',{allUsers});
      console.log("printing out allUsers belowwwww: ...")
      console.log(allUsers);
    })
  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
    register: registerControllerCallback
  };

}
