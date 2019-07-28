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
  const registerController = require('./controllers/register')(allModels);
  app.get('/register', registerController.registerRequestHandler);
  app.post('/register',registerController.registerControllerCallback);

  const loginController = require('./controllers/login')(allModels);
  app.get('/login',loginController.loginRequestHandler);
  app.post('/login',loginController.loginControllerCallback);

  const tweedHomeController = require('./controllers/tweedHome')(allModels);
  app.get('/tweedHome',tweedHomeController.tweedHomeControllerCallback);

};