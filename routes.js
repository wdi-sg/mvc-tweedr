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
  const tweedrControllerCallbacks = require('./controllers/tweedr')(allModels);

  app.get('/home', tweedrControllerCallbacks.home);
  //app.get('/pokemons/:id', pokemons.getPokemon);

  app.get('/register', tweedrControllerCallbacks.register);

  //app.post('/register', tweedrControllerCallbacks.registerPost);

  app.get('/login', tweedrControllerCallbacks.login);

  app.get('/tweets', tweedrControllerCallbacks.tweets)



};
