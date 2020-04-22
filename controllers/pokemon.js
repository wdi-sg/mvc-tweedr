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
  let registerControllerCallback = (request, response) => {
    db.pokemon.register((error, allPokemon) => {
      response.render('pokemon/register', { allPokemon });
    });
};
let loginControllerCallback = (request, response) => {
  db.pokemon.login((error, allPokemon) => {
    response.render('pokemon/login', { allPokemon });
  });
};


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
    register: registerControllerCallback,
    login: loginControllerCallback
  };

}
