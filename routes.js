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
  const twitterControllerCallbacks = require('./controllers/tweets')(allModels);


  //app.get('/pokemons/:id', twitter.getTwitter);
  app.post('/login', twitterControllerCallbacks.login);
  app.post('/register',twitterControllerCallbacks.register);
  app.get('/home', twitterControllerCallbacks.home);
  app.post('/logout', twitterControllerCallbacks.logout);
  app.post('/home',twitterControllerCallbacks.tweet);
 app.get('/', twitterControllerCallbacks.allTweets);


  //app.get('/pokemons/:id', pokemons.getPokemon);
};
