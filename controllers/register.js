const sha256 = require('js-sha256');
const SALT = "bananas are delicious";

module.exports = db => {
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let renderRegistrationForm = (request, response) => {
    response.render("users/register");
  };

  let registerUser = (request, response) => {
    const userRegistrationInfo = request.body;

    const renderCallback = (error, registeredUser) => {

      let currentSessionCookie = sha256( registeredUser[0].id + 'logged' + SALT );
      response.cookie("logged_in", currentSessionCookie);
      response.cookie("user_id", registeredUser[0].id);
      response.cookie("user_name", registeredUser[0].name);
      response.render("users/registerSuccess", { registeredUser });
    };

    db.userRegistration.registerUser(renderCallback, userRegistrationInfo);
  };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    renderRegistrationForm,
    registerUser
  };
};

