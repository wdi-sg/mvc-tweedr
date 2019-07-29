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
  const mainControllerCallbacks = require('./controllers/main')(allModels);

  app.get('/', mainControllerCallbacks.main);
  app.get('/login', mainControllerCallbacks.login);
  app.post('/tweets', mainControllerCallbacks.loggedin);

};
