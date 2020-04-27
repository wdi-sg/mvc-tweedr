module.exports = (db) => {
  let loginForm = (request, response) => {
    response.render("form");
  };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    loginForm: loginForm,
  };
};
