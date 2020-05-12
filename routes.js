module.exports = (app, allModels) => {

  /*
   *  =========================================
   *    ALL ROUTES FOR TWEEDR
   *  =========================================
   */

  // require the controllers
  const userController = require('./controllers/user')(allModels);
  const tweedController = require('./controllers/tweed')(allModels);

  // users
  app.get('/register', userController.newUser);
  app.post('/register', userController.registerUser);
  app.get('/login', userController.currentUser);
  app.post('/login', userController.loginUser);
  app.get('/logout', userController.logoutUser);

  // tweeds
  app.get('/new', tweedController.newTweed);
  app.post('/', tweedController.registerTweed);
  app.get('/', tweedController.allTweeds);

};