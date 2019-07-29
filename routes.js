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
  const userControllerCallbacks = require('./controllers/users')(allModels);
  const tweedControllerCallbacks = require('./controllers/tweed')(allModels);

  app.get('/', tweedControllerCallbacks.homeRequestHandler);
  app.post('/tweed', tweedControllerCallbacks.addNewTweedrRequestHandler);

  app.get('/login', userControllerCallbacks.loginRequestHandler);
  app.post('/login', userControllerCallbacks.authenticateRequestHandler);

  app.get('/logout', userControllerCallbacks.logoutRequestHandler);

  app.get('/register', userController.registerRequestHandler);
  app.post('/register', userController.createAccountRequestHandler);

};
