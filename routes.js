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
  const users = require('./controllers/users')(allModels);
  const tweeds = require('./controllers/tweeds')(allModels);

  app.get('/pokemons', pokemonControllerCallbacks.index);
  //app.get('/pokemons/:id', pokemons.getPokemon);

  app.get('/register', users.registerForm);
  //app.get('register', users('controller').registerFormCallback);

  app.post('/registered', users.postRegister);
  //app.get('home', users('controller').);
};
