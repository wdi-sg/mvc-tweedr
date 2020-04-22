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

  app.get('/', homePage.index);

  app.post('/tweet/:id', homePage.tweet);


  // Login page
  const loginPage = require('./controllers/login')(allModels);

  app.get('/login', loginPage.loginPage);

  app.get('/authenticating', loginPage.login);


  // Registration page

  const registrationPage = require('./controllers/registration')(allModels);

  app.get('/register', registrationPage.registerPage);

  app.post('/register', registrationPage.register);
};