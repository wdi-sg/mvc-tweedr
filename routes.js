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
  app.get('/login', tweedrControllerCallbacks.login);
  app.get('/signup', tweedrControllerCallbacks.signup);
  app.post('/signup', tweedrControllerCallbacks.signupPost);
  app.post('/login', tweedrControllerCallbacks.loginPost);

};
