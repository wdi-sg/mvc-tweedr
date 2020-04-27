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

  let users-register = (request, response) => {
      db.tweeder.getAll((error, allPokemon) => {
        response.render('/users-register', { allPokemon });
      });

  let dashboard = (request, response) => {
      db.tweeder.getAll((error, allPokemon) => {
        response.render('/dashboard', { allPokemon });
      });
  };


  return {
    index: indexControllerCallback,
    users-register: users-register,
    dashboard: dashboard,
  };

}
