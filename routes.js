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
  const tweedrCallbacks = require('./controllers/tweedr')(allModels);
  const userCallbacks = require('./controllers/user')(allModels);

  app.get('/register', userCallbacks.newUser);

  app.post('/register', userCallbacks.createUser);

  app.get('/login', userCallbacks.userLoginForm);

  app.post('/login', userCallbacks.userLogin);

  app.get('/tweedr', tweedrCallbacks.index);

  app.get('/tweedr/new', tweedrCallbacks.tweedNew);

  app.post('/tweedr', tweedrCallbacks.tweedCreate);

  app.get('/tweedr/:id',tweedrCallbacks.tweedShow);

  };
