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

  // require the controller
  const userControllerCallbacks = require('./controllers/userController')(allModels);
  const tweetControllerCallbacks = require('./controllers/tweetController')(allModels);




  app.get('/', tweetControllerCallbacks.getAllTweets);
  app.get('/register', userControllerCallbacks.renderRegister);
  app.post('/register/new_acc', userControllerCallbacks.login);

  app.get('/login', userControllerCallbacks.renderLogin);
  app.post('/login/check', userControllerCallbacks.checkLogin);

  app.get('/user/:id', tweetControllerCallbacks.showFollowingTweets);



  app.get('/users', userControllerCallbacks.getAllUsers);
  app.get('/users/:id', userControllerCallbacks.getSingleUser);
  app.get('/tweets', tweetControllerCallbacks.getAllTweets);
  app.get('/tweets/:id', tweetControllerCallbacks.getSingleTweet);
};