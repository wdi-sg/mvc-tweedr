module.exports = (app, allModels) => {

  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller
  const tweedrControllerCallbacks = require('./controllers/tweedr')(allModels);

  app.get('/tweedr', tweedrControllerCallbacks.index);

  app.get('/register', tweedrControllerCallbacks.userNew);

  app.post('/register', tweedrControllerCallbacks.userCreate);

  app.get('/login', tweedrControllerCallbacks.userLogin);

  app.post('/login', tweedrControllerCallbacks.userLoggedIn);

  app.get('/tweedr/new', tweedrControllerCallbacks.tweedNew);

  app.post('/tweedr', tweedrControllerCallbacks.tweedCreate);

  app.get('/users/:id',tweedrControllerCallbacks.userProfile);

  app.post('/users', tweedrControllerCallbacks.userFollow);

};
