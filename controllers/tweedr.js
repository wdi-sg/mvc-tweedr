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
    db.tweedr.registerProcess((error, tweedr) => {
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
