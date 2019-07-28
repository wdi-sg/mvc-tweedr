const sha256 = require('js-sha256');
const SALT = 'meow meow poop';
const cookieParser = require('cookie-parser')

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

    let register = (request, response) => {
        response.render('pages/register');
    };

    let registrationComplete = (request, response) => {
        const data = {
            name: request.body.name,
            password: sha256(request.body.password + SALT),
            profile_img: request.body.profile_img
        }
        const registrationConfirmation = data => {
            console.log(data);
            let hashedLogin = sha256('logged_id: ' + queryResult.rows[0].id + SALT);
            response.cookie('loggedin', hashedLogin);
            response.cookie('userid', queryResult.rows[0].id);
            response.send("Registration Complete!");
        }
      db.register.newUser(data, registrationConfirmation);
      //registrationConfirmation is the callback function for afterrrr new user is registered
    };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    start: register,
    end: registrationComplete
  };
}