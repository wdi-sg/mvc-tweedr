module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let registerPage = (request, response) => {
    response.render('register');
  };

  let registerUser = (req, res) => {

    const values = req.body

    db.tweedr.registerNewUser((err, result) => {
      
      res.render('index', result)
    }, values)
  }
  // db.pokemon.registerUser((error, user) => {
  //   response.render('register', { user });
  // });

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    showRegister: registerPage,
    registerUser: registerUser,
    
  };

}
