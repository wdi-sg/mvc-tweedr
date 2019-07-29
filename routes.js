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
  const objectControllerCallbacks = require('./controllers/controller')(allModels);

  app.get('/index', objectControllerCallbacks.homepage);
  app.get('/', objectControllerCallbacks.alltweets);
  app.get('/login', objectControllerCallbacks.login);
  app.get('/register', objectControllerCallbacks.register);
  app.post('/tweedr', objectControllerCallbacks.tweedr);
  app.post('/sendtweed', objectControllerCallbacks.sendtweed);
  app.post('/follow',objectControllerCallbacks.follow)
  app.get('/users/:id',objectControllerCallbacks.users)
  app.get('/tweet/:id',objectControllerCallbacks.tweet)
  app.get('/duplicate',objectControllerCallbacks.duplicate)
};
