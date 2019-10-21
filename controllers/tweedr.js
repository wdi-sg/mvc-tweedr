module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let indexControllerCallback = (request, response) => {
    db.tweedr.getAll((error, allTweedr) => {
      response.render('tweedr/index', { allTweedr });
    });
  };
  let registerFormControllerCallback = (request, response) => {
    db.tweedr.getAll((error, allTweedr) => {
      response.render('tweedr/user/register', { allTweedr });
    });
  };
  // let loginControllerCallback = (request, response) => {
  //   db.tweedr.getAll((error, allTweedr) => {
  //     response.render('tweedr/login', { allTweedr });
  //   });
  // };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
    // login: loginControllerCallback,
    registerForm: registerFormControllerCallback,
    // register:xxx
  };

}
