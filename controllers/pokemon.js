module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let indexControllerCallback = (request, response) => {
      db.pokemon.getAll((error, allUsers) => {
        response.render('pokemon/index', { allUsers });
      });
  };

  let test1 = (request, response) => {
    db.pokemon.get
  }


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
    test1
  };

}
