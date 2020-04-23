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

  //Users Controller and Routes
  const usersController = require('./controllers/users')(allModels);
  app.get('/registration', usersController.registrationForm);
  app.post('/registration', usersController.registerUser);
  app.get('/login', usersController.loginForm);
  app.post('/login', usersController.loginUser);

  //Tweet Controller and Routes
  const tweetController = require('./controllers/tweets')(allModels);
  app.post('/addtweet', tweetController.addTweet);
  app.get('/', tweetController.displayTweetsAndHashtags);
  app.post('/addhashtag', tweetController.addHashtag)
};