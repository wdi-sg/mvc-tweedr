 //must npm install js-sha256 and use it here
var sha256 = require('js-sha256');
const SALT = "saltprotector";

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */
//for ('/') path and getting info from getAll in models
  let indexControllerCallback = (request, response) => {
    //db.tweedr de tweedr comes from db.js de line 98's key
      db.tweedr.getAll((error, allTweedr) => {
        // response.send(allTweedr.name);
        response.render('tweedr/index', { allTweedr });
      });
  };

//for get's ('/register') path
  let registerFormControllerCallback = (request, response) => {
    response.render('tweedr/register');
    // response.send('wana register?');
  };

//for post's ('register') path
  let registerControllerCallback = (request, response) => {
    //the username here is same with the queryResult in register's dbPoolInstance
    db.tweedr.register(request.body, (error, username) => {
        console.log(username);
        if (error) {
            console.log("Error", error);
            response.status(404).send('error', error);
        }
        if (username.rowCount = 1) {
            let user_id = username.rows[0].id;
            let hashedUser = sha256(user_id+SALT);
            //'username's value is undefined, able to register and redirect to homepage d but not able to add value to 'username's in cookie yet
            response.cookie('username', username.rows[0].name);
            response.cookie('loggedIn', hashedUser);
            response.cookie('userId', user_id);
            response.redirect('/');
        } else {
          console.log('User could not be created');
        }
        });
};

//for get's ('/register') path
  let loginFormControllerCallback = (request, response) => {
    response.render('tweedr/login');
    // response.send('wana register?');
  };




  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
    registerForm: registerFormControllerCallback,
    register: registerControllerCallback,
    loginForm: loginFormControllerCallback
  };

}