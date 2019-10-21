module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */
  
  
    let registerControllerCallback = (request, response) => {
      db.tweedr.getAll((error, allTweedr) => {
        response.render('tweedr/register', { allTweedr });
      });
    };
    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
      registerForm: registerControllerCallback,
      register:xxx
    };
  
  }
  