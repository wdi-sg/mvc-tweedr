module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let indexControllerCallback = (request, response) => {
      db.tweeder.getAll((error, allPokemon) => {
        response.render('/login', { allPokemon });
      });
  };

  let indexControllerCallback = (request, response) => {
      db.tweeder.getAll((error, allPokemon) => {
        response.render('/users-register', { allPokemon });
      });
  };


  return {
    index: indexControllerCallback,
    users-register: users-register,
    dashboard: dashboard
  };

}
