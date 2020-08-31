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
  const tweedrControllerCallbacks = require('./controllers/tweedrcontrol')(allModels);

  app.get('/', tweedrControllerCallbacks.allTweets);
  app.get('/login', tweedrControllerCallbacks.logIn);
  app.post('/storepassword', tweedrControllerCallbacks.postLogIn);
  app.get('/write', tweedrControllerCallbacks.writeTweed);
  app.post('/posted', tweedrControllerCallbacks.postTweed);
  app.get('/users/:id',tweedrControllerCallbacks.getProfile)
  app.get('/register', tweedrControllerCallbacks.getRegister);
  app.post('/signed', tweedrControllerCallbacks.postSignup);
  app.post("/followed/:id",tweedrControllerCallbacks.postFollowers)
};