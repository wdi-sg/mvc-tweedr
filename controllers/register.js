module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */
  
    let renderRegistrationForm = (request, response) => {
          response.render('users/register');
    };
  
  
    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
      renderRegistrationForm,
    };
  
  }
  