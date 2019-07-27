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
  const tweedrControllerCallbacks = require('./controllers/tw-controller')(allModels);

  app.get('/index', tweedrControllerCallbacks.index);

  app.get('/login', tweedrControllerCallbacks.login);
  app.post('/login', tweedrControllerCallbacks.login);

  app.get('/register', tweedrControllerCallbacks.register);
  app.post('/register', tweedrControllerCallbacks.createUser);

  app.get('/home', tweedrControllerCallbacks.home);

  app.get('*', tweedrControllerCallbacks.redirect);
};