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
  const tweedrController = require('./controllers/tweedr')(allModels);

    app.post('/login', tweedrController.loginPost);
    app.get('/login', tweedrController.login);
    app.post('/register', tweedrController.registerPost);
    app.get('/register', tweedrController.register);
    app.post('/home', tweedrController.homePost);
    app.get('/home', tweedrController.home);
    app.get('/logout', tweedrController.logout);
    app.get('/', tweedrController.root);

};