module.exports = (app, allModels) => {
  // require all controllers
  const register = require('./controllers/register')(allModels);
  const login = require('./controllers/login')(allModels);

  app.get('/register', register.start);
  app.post('/register', register.end);

  app.get('/login', login.start);
  app.post('/login', login.end);
};