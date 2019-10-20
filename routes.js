module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR TWEEDR CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller
  // const pokemonControllerCallbacks = require('./controllers/pokemon')(allModels);
  const tweedrControllerCallbacks = require('./controllers/tweedr')(allModels);

  app.get('/tweedr', tweedrControllerCallbacks.index);

  app.get('/tweet', tweedrControllerCallbacks.tweet);
  app.post('/tweet', tweedrControllerCallbacks.tweetPost);

  app.get('/login', tweedrControllerCallbacks.login);
  app.post('/login', tweedrControllerCallbacks.loginPost);

  app.get('/register', tweedrControllerCallbacks.register);
  app.post('/register', tweedrControllerCallbacks.registerPost);
  // app.get('/pokemons', pokemonControllerCallbacks.index);
  //app.get('/pokemons/:id', pokemons.getPokemon);
};
