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
  const userControllerCallbacks = require('./controllers/user')(allModels);
  app.get('/pokemons', pokemonControllerCallbacks.index);
  app.get('/login', userControllerCallbacks.login);
  app.post('/login', userControllerCallbacks.loggedIn);
};