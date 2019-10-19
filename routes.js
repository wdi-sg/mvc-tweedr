module.exports = (app, allModels) => {

  /*
   *  =========================================
   *    ALL ROUTES FOR TWEEDR
   *  =========================================
   */

  // require the controllers
  const userController = require('./controllers/user')(allModels);

  // users
  app.get('/register', userController.newUser);
  app.post('/register', userController.registerUser);
  app.get('/login', userController.currentUser);
  app.post('/login', userController.loginUser);

};