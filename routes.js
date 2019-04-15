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

  app.get('/', tweedrControllerCallbacks.index);
  app.get('/register', tweedrControllerCallbacks.register);
  app.post('/register/success', tweedrControllerCallbacks.registerComplete);
  app.get('/login', tweedrControllerCallbacks.login);
  app.post('/login/success', tweedrControllerCallbacks.loginComplete);
};
