module.exports = (app, allModels) => {

  // require the controller
  const register = require('./controllers/register')(allModels);
  const login = require('./controllers/main')(allModels);

  app.get('/register', register.index);
  app.post('/register', register.register);

  app.get('/login', login.index);
  app.post('/login', login.done);
};