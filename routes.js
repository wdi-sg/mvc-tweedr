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

  app.get('/register', tweedrControllerCallbacks.register);
  app.post('/register', tweedrControllerCallbacks.redirect);
  app.get('/login', tweedrControllerCallbacks.login);
  app.post('/login', tweedrControllerCallbacks.redirectToHome;
  app.get('/', tweedrControllerCallbacks.index);
};