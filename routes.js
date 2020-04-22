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

  // Home page
  const homePage = require('./controllers/index')(allModels);

  app.get('/', homePage.index)


  // Registration page

  const registrationPage = require('./controllers/registration')(allModels);

  app.get('/register', registrationPage.registerPage);

  app.post('/register', registrationPage.register);
};