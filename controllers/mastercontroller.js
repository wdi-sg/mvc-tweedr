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

let register = (request,response) => {
    console.log("in pokemon controller");
}

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    // index: index,
    register: register,
    // login:  loginControllerCallback,
  };

}