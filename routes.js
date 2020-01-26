module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR TWEEDR CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controllers
  const userController = require('./controllers/users')(allModels);
  const tweetController = require('./controllers/tweets')(allModels);

  // users
  app.get('/register', userController.newUser);
  app.post('/register', userController.registerUser);
  app.get('/login', userController.currentUser);
  app.post('/login', userController.loginUser);
  app.get('/logout', userController.logoutUser);

  // tweets
  app.get('/new', tweetController.newTweet);
  app.post('/', tweetController.registerTweet);
  app.get('/', tweetController.allTweets);

};