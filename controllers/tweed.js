module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let getNewTweed = (request, response) => {
    // check if user is login
    let user = request.cookies.name;
    if (user === undefined) {
      // redirect to login
      db.users.currentUser((error, account) => {
        response.render('user/account', { account });
      });
    } else {
      //check if password correct
      db.users.checkUserName(user, (error, result) => {
        // if name match
        if (result !== null) {
          // check password
          if ( request.cookies.loggedIn === result[0].password) {
            // respond with HTML page with form to add new tweed
            let tweed = {}
            tweed.title = "New Tweed";
            tweed.formAction = "/";
            tweed.tweed = 0
            response.render('tweed/tweed', { tweed });
          }  else {
            // inform incorrect password
            db.users.wrongPassword((error, account) => {
              response.render('user/account', { account });
            });
          }
        }
      })
    };
  };

  let postNewTweed = (request, response) => {
    // get user id
    let user = request.cookies.name;
    db.users.checkUserName(user, (error, result) => {
      // POST tweed
      let tweed = {}
      tweed.tweed = request.body.tweed;
      tweed.user_id = result[0].id;
      db.tweeds.registerTweed(tweed, (error, result) => {
        // redirect to homepage
        response.redirect('/');
      });
    });
  };

  let getTweeds = (request, response) => {
    // respond with HTML page of all tweeds
    db.tweeds.allTweeds((error, result) => {
      console.log(result);
      let display = {};
      display.result = result;
      // check if user is login
      let user = request.cookies.name;
      if (user === undefined) {
        display.formAction1 = "/register";
        display.button1 = "Register";
        display.formAction2 = "/login";
        display.button2 = "Login";
      } else {
          display.user = user;
          display.formAction1 = "/user/" + user;
          display.button1 = "Profile";
          display.formAction2 = "/new";
          display.button2 = "Tweed";
      }
      response.render('tweed/index', display);
    });
  };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    newTweed: getNewTweed,
    registerTweed: postNewTweed,
    allTweeds: getTweeds
  };

}