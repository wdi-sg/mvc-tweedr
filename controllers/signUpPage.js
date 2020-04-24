module.exports = (db) => {
  var sha256 = require("js-sha256");

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let signUpPageForm = (request, response) => {
    response.render("signUpForm");
  };
  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    signUpPageForm: signUpPageForm,
  };
};
