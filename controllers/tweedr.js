var sha256 = require('js-sha256');
const SALT = "bananas are delicious";

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let indexControllerCallback = (request, response) => {
      // db.tweedr.getAll((error, tweedr) => {
        response.render('home');
      // });
  };


  let registerControllerCallback = (request, response) => {
      // db.tweedr.registerForm((error, tweedr) => {
        response.render('register');
      // });
  };


  let registerCompleteControllerCallback = (request, response) => {
    let nameInput = request.body.name;
    let passwordInput = sha256(request.body.password + SALT);
    const values = [nameInput, passwordInput];

    db.tweedr.registerProcess(values, (error, tweedr) => {

        response.render('options');
    });
  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
    register: registerControllerCallback,
    registerDone: registerCompleteControllerCallback
  };

}
