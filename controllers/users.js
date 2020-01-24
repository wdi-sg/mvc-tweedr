module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  const signInPage = (request, response) => {
      response.render('users/signinpage');
  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    signInPage: signInPage,
  };

}
