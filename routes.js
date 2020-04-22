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
  const users = require('./controllers/users')(allModels);

  // tweeds
  app.get('/', tweedr.index);
  app.get('/tweeds/new', tweedr.new);
  app.post('/tweeds', tweedr.newTweed);

  // users
  app.get('/users/new', users.new);
  app.get('/users/login', users.loginPage);
  app.post('/users', users.newUser);
  app.post('/users/login', users.login);
  app.post('/users/logout', users.logout);
};