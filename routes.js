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

  app.get('/register', tweedrControllerCallbacks.register);
  app.post('/register', tweedrControllerCallbacks.redirect);
  app.get('/login', tweedrControllerCallbacks.login);
  app.post('/login', tweedrControllerCallbacks.redirectToHome);
  app.post('/users', tweedrControllerCallbacks.getOneUser);
  app.get('/allUsers', tweedrControllerCallbacks.allUsers);
  app.get('/logout', tweedrControllerCallbacks.logout);
  app.get('/followers', tweedrControllerCallbacks.followers)
  app.get('/', tweedrControllerCallbacks.index);
  app.post('/', tweedrControllerCallbacks.addTweeds);
};