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
      let account = {};
      account.title = "Login Account";
      account.message = "Please login to tweed";
      account.formAction = "/login";
      account.user = 0;
      response.render('user/account', { account });
    } else {
      //check if password correct
      db.users.checkUserName(user, (error, result) => {
        // if name match
        if (result !== null) {
          // check password
          if ( request.cookies.loggedIn === result[0].password) {
            // respond with HTML page with form to add new tweed
            response.send("tweed!");
          }  else {
            // inform incorrect password
            let account = {};
            account.title = "Login Account";
            account.message = "Incorrect password, please try again.";
            account.formAction = "/login";
            account.user = 0;
            response.render('user/account', { account });
          }
        }
      })
    };
  };

  // let postNewUser = (request, response) => {
  //   let newUser = request.body;
  //   // check if name already exist
  //   db.users.checkUserName(newUser.name, (error, result) => {
  //     // if exist, request another name
  //     if (result !== null) {
  //       let account = {};
  //       account.title = "Register Account";
  //       account.message = "Name already taken, please choose another name.";
  //       account.formAction = "/register";
  //       account.user = 0;
  //       response.render('user/account', { account });
  //     } else {
  //       // INSERT new user into user db
  //       db.users.registerUser(newUser, (error, account) => {
  //       // redirect to homepage
  //       response.send({ account });
  //       });
  //     }
  //   });
  // };

  // let getUser =  (request, response) => {
  //   // respond with HTML page with form to login
  //   db.users.currentUser((error, account) => {
  //     response.render('user/account', { account });
  //   });
  // };

  // let postUser = (request, response) => {
  //   // check user login
  //   let user =  request.body;
  //   // check if name is correct
  //   db.users.checkUserName(user.name, (error, result) => {
  //     // if name match
  //     if (result !== null) {
  //       // check password
  //       // hash password

  //       if (user.password === result[0].password) {
  //         // set cookies

  //         // redirect to homepage
  //         response.send(result);
  //       } else {
  //           // inform incorrect password
  //           let account = {};
  //           account.title = "Login Account";
  //           account.message = "Incorrect password, please try again.";
  //           account.formAction = "/login";
  //           account.user = 0;
  //           response.render('user/account', { account });
  //       }
  //     } else {
  //       // inform incorrect name
  //       let account = {};
  //       account.title = "Login Account";
  //       account.message = "Incorrect name, please try again.";
  //       account.formAction = "/login";
  //       account.user = 0;
  //       response.render('user/account', { account });
  //     }
  //   });
  // };
  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    newTweed: getNewTweed,
    // registerUser: postNewUser,
    // currentUser: getUser,
    // loginUser: postUser
  };

}