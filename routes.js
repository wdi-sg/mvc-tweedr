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

  app.post('/logout', tweedrControllerCallbacks.logout);

  app.get('*', tweedrControllerCallbacks.redirect);
};