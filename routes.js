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
  const tweedrControllerCallbacks = require('./controllers/tweedr')(allModels);

  app.get('/landing', tweedrControllerCallbacks.landing);
  app.get('/', tweedrControllerCallbacks.index);
  app.get('/register', tweedrControllerCallbacks.registerForm);
  app.post('/register', tweedrControllerCallbacks.register);
  app.get('/login', tweedrControllerCallbacks.loginForm);
  app.post('/login', tweedrControllerCallbacks.login);
  app.get('/logout', tweedrControllerCallbacks.logout);
};