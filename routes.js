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
  //allModels has been defined in index.js -> const allModels = require('./db');
  //allModels tells the controller to export all the models
  const allTweetsControllerCallbacks = require('./controllers/tweets')(allModels);

//('route', defined-callback-from-above.key-from-controller-return)
  app.get('/', allTweetsControllerCallbacks.getAllTweets);

  app.get('/register', allTweetsControllerCallbacks.createUser);
  app.post('/register', allTweetsControllerCallbacks.addUser);

  app.get('/login', allTweetsControllerCallbacks.login);
  app.post('/home', allTweetsControllerCallbacks.verifyLogIn);

  app.get('/newtweet', allTweetsControllerCallbacks.createTweet);
  app.post('/newtweet', allTweetsControllerCallbacks.addTweet);

  app.get('/payment', allTweetsControllerCallbacks.newPayment);
  app.post('/payment', allTweetsControllerCallbacks.submitPayment);

  app.get('/overview', allTweetsControllerCallbacks.userPayments);

};