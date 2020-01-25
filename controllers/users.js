module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

   // Page for user to sign in.
  const signInPage = (request, response) => {
      response.render('users/signinpage');
  };

  // Response when receiving username and password.
  const signIn = (request, response) => {
    let inputUsername = request.body.username;
    let inputPassword = request.body.password;

    const callbackFunction = () => {
      // set cookies.
      // redirect to home page.

      console.log('did the callback');
    }

    db.users.signIn(inputUsername, inputPassword, callbackFunction);
  }

  // To register an account just redirect to register page.
  const registerPage = (request, response) => {
    response.render('users/registerpage');
  }

  // Registering a new account.
  const registerAccount = (request, response) => {
    const inputUsername = request.body.username;
    const inputPassword = request.body.password;

    const callbackFunction = (err, result) => {
      if (err) {
        console.log('error!', err);
        response.status(500).send('error!');
      } else {
        response.send('successfully registered account.');
      }
    }

    db.users.registerAccount(inputUsername, inputPassword, callbackFunction);
  }


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    signInPage: signInPage,
    signIn: signIn,
    registerPage: registerPage,
    registerAccount: registerAccount
  };

}
