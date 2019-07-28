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
  const pokemonControllerCallbacks = require('./controllers/tweet-controller')(allModels);


  app.get('/', pokemonControllerCallbacks.index);
  app.get('/register', pokemonControllerCallbacks.register);
  app.post('/users', pokemonControllerCallbacks.registerUser);
  app.post('/users/logincheck', pokemonControllerCallbacks.logincheck);
  app.post('/users/createtweet', pokemonControllerCallbacks.createtweet);
  //app.get('/pokemons/:id', pokemons.getPokemon);
};