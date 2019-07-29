const sha256 = require('js-sha256');
const SALT = 'meow meow poop';
const cookieParser = require('cookie-parser')

module.exports = (db) => {
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */
    let registerForm = (request, response) => {
        response.render('pages/register');
    };

    let registrationAttempt = (request, response) => {
        const data = {
            username: request.body.username,
            password: sha256(request.body.password + SALT),
            profile_img: request.body.profile_img
        }

        const registrationConfirmation = () => {
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
    start: registerForm,
    end: registrationAttempt
  };
}