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
  const twitterControllerCallbacks = require('./controllers/twitter')(allModels);

  app.get('/', twitterControllerCallbacks.index);
  //app.get('/pokemons/:id', twitter.getTwitter);
  app.post('/login', twitterControllerCallbacks.login);
  app.post('/register',twitterControllerCallbacks.register);
  app.get('/home', twitterControllerCallbacks.home);
  app.post('/logout', twitterControllerCallbacks.logout);
  app.post('/home',twitterControllerCallbacks.tweet);
};
