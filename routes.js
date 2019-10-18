module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR TWEET CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller
  const mainController = require('./controllers/tweedrController')(allModels);
  

  app.get('/welcome', mainController.welcomePage);
  app.get('/login', mainController.logInPage)
  app.post('/login', mainController.login );
};
