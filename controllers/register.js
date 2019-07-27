const sha256 = require('js-sha256');
const SALT = 'meow meow poop';

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
            response.send("Registration Complete!");
        }
      db.register.createUser(data, registrationConfirmation);
      //registrationConfirmation is the callback function
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