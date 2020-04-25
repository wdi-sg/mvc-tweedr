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

  app.get('/register',tweedrControllerCallbacks.registerPage);
  app.get('/login',tweedrControllerCallbacks.loginPage);
  app.get('/home',tweedrControllerCallbacks.home);
  app.get('/newTweet',tweedrControllerCallbacks.newTweetPage);
  app.post('/newTweet',tweedrControllerCallbacks.newTweetPost);
  app.post('/register',tweedrControllerCallbacks.register);
  app.post('/login',tweedrControllerCallbacks.login)
};

