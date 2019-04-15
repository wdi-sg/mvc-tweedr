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
  const login = require('./controllers/main')(allModels);
  const create = require('./controllers/create')(allModels);
  const show = require('./controllers/show')(allModels);


  app.get('/', allTweeds.main);

  app.get('/register', register.index);
  app.post('/register', register.register);

  app.get('/login', login.index);
  app.post('/login', login.done);

  app.get('/users/:id', show.tweeds);
  app.post('/users/:id', create.tweed);



};