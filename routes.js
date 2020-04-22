module.exports = (app, allModels) => {
  
  //Require the controller
  const usersController = require('./controllers/users')(allModels);
  const tweetsController = require('./controllers/tweets')(allModels);

  //ROUTES

  app.get('/', usersController.displayLoginPage);

  app.get('/register', usersController.displayRegistration);

  app.post('/register', usersController.submitRegistration);

};
