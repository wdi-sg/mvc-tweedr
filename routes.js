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

  // Login page
  const loginPage = require('./controllers/login')(allModels);

  app.get('/login', loginPage.loginPage);

  app.get('/authenticating', loginPage.login);


  // Home page
  const homePage = require('./controllers/index')(allModels);

  app.get('/', homePage.index);

  app.post('/tweet/:id', homePage.tweet);


  // Registration page
  const registrationPage = require('./controllers/registration')(allModels);

  app.get('/register', registrationPage.registerPage);

  app.post('/register', registrationPage.register);


  //profile page
  const profilePage = require('./controllers/profile')(allModels);

  app.get('/profile/:id/:user', profilePage.profile);

  app.post('/follow', profilePage.follow);

};