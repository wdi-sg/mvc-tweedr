module.exports = (app, allModels) => {
  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR TWEED CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller
  const tweedCtrl = require('./controllers/tweed')(allModels);

  app.get('/', tweedCtrl.tweedModHome);
  app.get('/register', tweedCtrl.registerForm);
  app.post('/register', tweedCtrl.addNewUser);
  app.get('/login', tweedCtrl.loginForm);
  app.post('/login', tweedCtrl.loginCheck);
  app.delete('/logout', tweedCtrl.logout);
  app.get('/tweed', tweedCtrl.tweedPage);
};
