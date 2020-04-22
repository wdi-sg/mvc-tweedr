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

  app.get('/pokemons', pokemonControllerCallbacks.index);
  //app.get('/pokemons/:id', pokemons.getPokemon);

//--------------------------------------
    app.get('/', pokemonControllerCallbacks.main)

    app.get('/login/', pokemonControllerCallbacks.login)

    app.post('/login', pokemonControllerCallbacks.loginCheck)

};