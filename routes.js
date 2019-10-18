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
  const userRegisterControllerCallbacks = require('./controllers/register')(allModels);

  app.get('/pokemons', pokemonControllerCallbacks.index);
  app.get('/register', userRegisterControllerCallbacks.index);
  //app.get('/pokemons/:id', pokemons.getPokemon);
};
