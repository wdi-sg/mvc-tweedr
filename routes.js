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
  app.post('/home', tweedrControllerCallbacks.checkLogin);

  app.get('/register', tweedrControllerCallbacks.register);
  app.post('/register', tweedrControllerCallbacks.createUser);

  app.get('/home', tweedrControllerCallbacks.home);

  app.post('/logout', tweedrControllerCallbacks.logout);

  app.get('*', tweedrControllerCallbacks.redirect);
};