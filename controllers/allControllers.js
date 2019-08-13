module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */


  let loginControllerCallback = (request, response) => {
    response.render('login')
  }

  let authenticateUserControllerCallback = (request, response) => {
    console.log("authenticateUser - contorller");

    db.models.login(request.body, (error, userInfo) => {
      console.log("authenticateUser - contorller - Model callback")
      //console.log(userInfo)

      if (userInfo != null) {
        db.models.tweetsHistory((error, tweetsHistory) => {
          //console.log("tweetsHistory");
          //console.log(tweetsHistory);

          let data = {
            tweets: tweetsHistory,
            user: userInfo[0],
          }
          response.render('tweets', data)
        });
      } else
        console.log("Login Fail")
    });
  };

  let tweetControllerCallback = (request, response) => {
    console.log("saveTweets - contorller ")
    console.log(request.body)

    db.models.saveTweets(request.body, (error, tweetsHistory) => {
      let data = {
        tweets: tweetsHistory,
        user: { 
          "id": request.body.userId,
          "profile": request.body.userProfile
        },
      }
      response.render('tweets', data)
    });
  }




  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    login: loginControllerCallback,
    authenticateUser: authenticateUserControllerCallback,
    saveTweets: tweetControllerCallback,
  };

}
