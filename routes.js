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

  app.get('/', pokemonControllerCallbacks.viewHome);

  app.get('/tweet', pokemonControllerCallbacks.newTweet);

  app.get('/login', pokemonControllerCallbacks.viewLogin);

  app.get('/register', pokemonControllerCallbacks.viewRegister);

  app.post('/register', pokemonControllerCallbacks.registerAccount);
};