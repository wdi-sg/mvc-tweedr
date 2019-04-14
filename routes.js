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
  const allTweeds = require('./controllers/main')(allModels);
  const register = require('./controllers/register')(allModels);
  const login = require('./controllers/login')(allModels);


  app.get('/', allTweeds.index);

  app.get('/register', register.index);
  app.post('/register', register.register);

  app.get('/login', login.index);
  app.post('/login', login.done);



};