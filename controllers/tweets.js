module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  const getNewTweet = (request, response) => {
    // check if user is logged in
    let user = request.cookies.name;
    if (user === undefined) {
      // redirect to login
      db.users.currentUser((error, account) => {
        response.render('users/account', { account });
      });
    } else {
      //check if password correct
      db.users.checkUserName(user, (error, result) => {
        // check password
        if (request.cookies.loggedIn === result[0].password) {
          // respond with HTML page with form to add new Tweet
          let tweet = {}
          tweet.title = "New Tweet";
          tweet.formActionhome = "/";
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
};

const postNewTweet = (request, response) => {
  // get user id
  let user = request.cookies.name;
  db.users.checkUserName(user, (error, result) => {
    // POST tweet
    let tweet = {}
    tweet.tweet = request.body.tweet;
    tweet.user_id = result[0].id;
    db.tweets.postNewTweet(tweet, (error, result) => {
      // redirect to homepage
      response.redirect('/');
    });
  });
};

const getTweets = (request, response) => {
  // respond with HTML page of all tweets
  db.tweets.getTweets((error, result) => {
    console.log(result);
    let display = {};
    display.result = result;
    // check if user is logged in
    let user = request.cookies.name;
    if (user === undefined) {
      display.formActionReg = "/register";
      display.button1 = "Register";
      display.formActionIn = "/login";
      display.buttonIn = "Login";
    } else {
      display.user = user;
      display.formActionReg = "/user/" + user;
      display.buttonReg = "Profile";
      display.formActionIn = "/new";
      display.buttonIn = "Tweet";
    }
    response.render('tweets/index', display);
  });
};

/**
 * ===========================================
 * Export controller functions as a module
 * ===========================================
 */
return {
  getNewTweet: getnewTweet,
  postNewTweet: postNewTweet,
  getTweets: getTweets
};

