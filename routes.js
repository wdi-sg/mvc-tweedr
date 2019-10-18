module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR POKEMON CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller
  const pokemonControllerCallbacks = require('./controllers/pokemon')(allModels);
  const userRegistrationControllerCallbacks = require('./controllers/register')(allModels);

  app.get('/pokemons', pokemonControllerCallbacks.index);
  app.get('/register', userRegistrationControllerCallbacks.renderRegistrationForm);
  //app.get('/pokemons/:id', pokemons.getPokemon);
};
