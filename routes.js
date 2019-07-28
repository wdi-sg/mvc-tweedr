module.exports = (app, allModels) => {


  /**
   *  =========================================
   *    ALL ROUTES FOR CONTROLLER
   *  =========================================
   */

  // require the controller
  const tweetControllerCallbacks = require('./controllers/tweet')(allModels);
  const accountControllerCallbacks = require('./controllers/account')(allModels);
  const followerControllerCallbacks = require('./controllers/follower')(allModels);

  app.get('/', tweetControllerCallbacks.getAll);
  app.post('/register', accountControllerCallbacks.register);
  app.post('/login', accountControllerCallbacks.login);
  app.post('/logout', accountControllerCallbacks.logout);
  app.post('/new', tweetControllerCallbacks.addTweet);
  app.get('/users/:username', accountControllerCallbacks.profile);
  app.post('/follow/:username', followerControllerCallbacks.addFollower)
  app.post('/delete/:username/:tweetId', tweetControllerCallbacks.deleteTweet)
};
