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

  app.get('/register', tweedr.showRegister);
  app.post('/', tweedr.registerUser)
};
