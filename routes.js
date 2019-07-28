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
  const tweedrControllerCallbacks = require('./controllers/tw-controller')(allModels);

  app.get('/index', tweedrControllerCallbacks.showIndex);

  app.get('/login', tweedrControllerCallbacks.showLogin);
  app.post('/home', tweedrControllerCallbacks.checkLogin);

  app.get('/register', tweedrControllerCallbacks.showCreateUser);
  app.post('/register', tweedrControllerCallbacks.createUser);

  app.get('/home', tweedrControllerCallbacks.showHome);
  app.get('/newtweet', tweedrControllerCallbacks.showCreateTweet);
  app.post('/newtweet', tweedrControllerCallbacks.createTweet);

  app.get('/tweets', tweedrControllerCallbacks.showAllTweets);
  // app.get('/tweets/:id', tweedrControllerCallbacks.showAllTweets);
  app.get('/users/:id', tweedrControllerCallbacks.showIndvUser);
  app.post('/users/:id', tweedrControllerCallbacks.followIndvUser);
  app.get('/profile', tweedrControllerCallbacks.showUserProfile);

  // app.get('/following', tweedrControllerCallbacks.showUserProfile);

  app.post('/logout', tweedrControllerCallbacks.logout);

  app.get('*', tweedrControllerCallbacks.redirect);
};