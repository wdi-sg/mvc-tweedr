module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  const signInPage = (request, response) => {
      response.render('users/signinpage');
  };


  const signIn = (request, response) => {
    let inputUsername = request.body.username;
    let inputPassword = request.body.password;

    const callbackFunction = () => {
      console.log('did the callback');
    }

    db.users.signIn(inputUsername, inputPassword, callbackFunction);
  }


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    signInPage: signInPage,
    signIn: signIn,
  };

}
