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

  app.get('/tweedr', tweedrControllerCallbacks.index);
  app.get('/user/register', tweedrControllerCallbacks.registerForm);
  app.post('/user/register', tweedrControllerCallbacks.register);
  app.get('/user/login', tweedrControllerCallbacks.login);
  
};
