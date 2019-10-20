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
  // const pokemonControllerCallbacks = require('./controllers/pokemon')(allModels);
  const tweedrControllerCallbacks = require('./controllers/tweedr')(allModels);

  const usersControllerCallbacks = require('./controllers/users')(allModels);

  app.get('/tweedr', tweedrControllerCallbacks.index);
  app.get('/', tweedrControllerCallbacks.index);

  app.get('/tweet', tweedrControllerCallbacks.tweet);
  app.post('/tweet', tweedrControllerCallbacks.tweetPost);

  app.get('/u/:id', tweedrControllerCallbacks.mytweet);

  app.get('/logout', usersControllerCallbacks.logout);
  app.get('/login', usersControllerCallbacks.login);
  app.post('/login', usersControllerCallbacks.loginPost);

  app.get('/register', usersControllerCallbacks.register);
  app.post('/register', usersControllerCallbacks.registerPost);

};
