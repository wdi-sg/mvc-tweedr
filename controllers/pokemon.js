module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let indexControllerCallback = (request, response) => {
      db.pokemon.getAll((error, allPokemon) => {
        response.render('pokemon/index', { allPokemon });
      });
  };

  let viewRegisterControllerCallback = (request, response) => {
    response.render('register');
  }

  let registerAccountControllerCallback = (request, response) => {
    db.pokemon.registerAccount(request, response, (error, result) => {
      if(error){
        console.log('Query error', error.message);
        response.send("query error");
      }else {
        response.cookie('userid', result.rows[0].id);
        response.redirect('/');
      }
    });
  };

  let viewHomeControllerCallback = (request, response) => {
    db.pokemon.viewHome((error, result) => {
      if(error) {
        console.log('Query error', error.message);
        response.send("query error");
      }else {

      }
    });
  }

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
    viewRegister: viewRegisterControllerCallback,
    registerAccount: registerAccountControllerCallback,
    viewHome: viewHomeControllerCallback
  };

}