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
  const controllerCallbacks = require('./controllers/allControllers')(allModels);

  //app.get('/pokemons', pokemonControllerCallbacks.index);
  //app.get('/pokemons/:id', pokemons.getPokemon);
  app.get('/login', controllerCallbacks.login)
  app.post('/authenticateUser', controllerCallbacks.authenticateUser);
  app.post('/saveTweets', controllerCallbacks.saveTweets)


};
