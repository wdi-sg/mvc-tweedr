module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let getNewUser = (request, response) => {
    // respond with HTML page with form to register
    db.user.newUser((error, account) => {
      response.render('user/account', { account });
    });
  };

  let postNewUser = (request, response) => {
    // INSERT new user into user db
    let newUser = request.body;
    console.log(newUser);

    db.user.registerUser(newUser, (error, account) => {
      response.send({ account });
    });
  };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    newUser: getNewUser,
    registerUser: postNewUser
  };

}