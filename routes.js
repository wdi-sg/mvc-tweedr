const { useReducer } = require('react');

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
  const usersControllerCallbacks = require('./controllers/users')(allModels);
  const tweedsControllerCallbacks = require('./controllers/tweeds')(allModels);

  app.get('/', usersControllerCallbacks.welcome);
  app.get('/login', usersControllerCallbacks.loginPage);
  app.post('/login', usersControllerCallbacks.login);
  app.get('/tweed/:user', tweedsControllerCallbacks.userPage);

  // app.get('/homepage/:name', usersControllerCallbacks.);
  // app.get('/register', usersControllerCallbacks.register);

};
