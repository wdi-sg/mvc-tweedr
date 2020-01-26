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
  const tweedr = require('./controllers/tweedr')(allModels);

  app.get('/register', tweedr.registerPage);
  app.post('/register', tweedr.registerUser)
  app.get('/login', tweedr.loginPage)
  app.post('/login', tweedr.loginUser)
  app.get('/', tweedr.mainPage)
  // app.post('/', tweedr.newTweet)
};
