module.exports = (app, allModels) => {

  // require the controller
  const register = require('./controllers/register')(allModels);
  const login = require('./controllers/main')(allModels);

  app.get('/register', register.start);
  app.post('/register', register.end);

  app.get('/login', login.start);
  app.post('/login', login.end);
};