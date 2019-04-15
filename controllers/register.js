const sha256 = require('js-sha256');
const SALT = 'shrek';

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

    let register = (request, response) => {

        response.render('main/register');

    };

    let registerDone = (request, response) => {

        const data = {
            name: request.body.name,
            password: sha256(request.body.password + SALT),
            profile_img: request.body.profile_img
        }

        const doneWithQuery = (data) => {
            console.log(data);
            response.send("Thanks for signing up");
        }

      db.register.createUser(data, doneWithQuery);

    };




  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: register,
    register: registerDone,

  };

}