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
      response.render("users/registerSuccess", { registeredUser });
    };

    db.user.registerUser(renderCallback, userRegistrationInfo);
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

