const sha256 = require('js-sha256');

module.exports = (db) => {
  let SALT = "SuperSecredPassWord"
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let welcomeCallback = (request, response) => {
      response.render('tweedr/welcome')
  };

  let logInCallback = (request, response) => {
    response.render('tweedr/login')
};

let login = (request, response) => {
  let currentUser = request.body
    db.tweedr.checkUser(currentUser, (error, user) => {
      if (err) {
        console.error("query error:", err.stack);
        response.send("query error");
      } else {
      
      
      
      }
    })
}



  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    welcomePage: welcomeCallback,
    logInPage: logInCallback,
    login: login
  };

}
