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
  // const pokemonControllerCallbacks = require('./controllers/pokemon')(allModels);
  const tweedrControllerCallbacks = require('./controllers/tweedr')(allModels);

  app.get('/tweedr', tweedrControllerCallbacks.index);

  app.get('/register', tweedrControllerCallbacks.register);
  app.post('/register', tweedrControllerCallbacks.registerPost);
  // app.get('/pokemons', pokemonControllerCallbacks.index);
  //app.get('/pokemons/:id', pokemons.getPokemon);
};
