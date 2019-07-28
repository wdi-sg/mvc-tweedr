module.exports = (app, allModels) => {


  /**
   *  =========================================
   *    ALL ROUTES FOR CONTROLLER
   *  =========================================
   */

  // require the controller
  const tweetControllerCallbacks = require('./controllers/tweet')(allModels);
  const accountControllerCallbacks = require('./controllers/account')(allModels);

  app.get('/', tweetControllerCallbacks.getAll);
  app.post('/register', accountControllerCallbacks.register);
  app.post('/login', accountControllerCallbacks.login);
  app.post('/logout', accountControllerCallbacks.logout);
  app.post('/new', tweetControllerCallbacks.addNew);
  app.get('/users/:username', accountControllerCallbacks.profile);
  app.post('/follow/:username', accountControllerCallbacks.addFollower)
};
