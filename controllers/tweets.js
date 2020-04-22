module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let getNewTweet = (request, response) => {
    // check if user is logged in
    let user = request.cookies.name;
    let data = {
      user: user
    }
    console.log(user)
    if (user === undefined) {
      // redirect to login
      db.users.currentUser((error, account) => {
        response.render('users/account', data);
      });
    } else {
      //check if password correct
      db.users.checkUserName(user, (error, result) => {
        // check password
        if (request.cookies.loggedIn === result[0].password) {
          // respond with HTML page with form to add new Tweet
          let tweet = {}
          tweet.title = "New Tweet";
          tweet.formAction = "/";
          tweet.tweet = 0
          response.render('tweets/tweets', { tweet });
        } else {
          // incorrect password
          db.users.wrongPassword((error, account) => {
            response.render('users/account', { account });
          });
        }
      })
    }
  };

  let postNewTweet = (request, response) => {
    // get user id
    let user = request.cookies.name;
    db.users.checkUserName(user, (error, result) => {
      // POST tweet
      let tweet = {}
      tweet.user_id = result[0].id;
      tweet.tweet = request.body.tweet;
      db.tweets.postNewTweet(tweet, (error, result) => {
        // redirect to homepage
        response.redirect('/');
      });
    });
  };

  let allTweets = (request, response) => {
    // respond with HTML page of all tweets
    db.tweets.allTweets((error, result) => {
      console.log(result);
      let data = {

      };
      display.result = result;
      // check if user is logged in
      let user = request.cookies.name;
      if (user === undefined) {
        display.formActionReg = "/register";
        display.buttonReg = "Register";
        display.formActionLog = "/login";
        display.buttonLog = "Login";
      } else {
        display.user = user;
        display.formActionReg = "/user/" + user;
        display.buttonReg = "Profile";
        display.formActionLog = "/new";
        display.buttonLog = "Tweet";
      }
      response.render('tweets/index', data);
    });
  }

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    getnewTweet: getNewTweet,
    registerTweet: postNewTweet,
    allTweets: allTweets
  };



};

