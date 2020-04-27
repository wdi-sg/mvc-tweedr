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
  const tweedrControllerCallbacks = require('./controllers/tweedr')(allModels);

  app.get('/', tweedrControllerCallbacks.loadIndex);
  app.get('/login', tweedrControllerCallbacks.login);
  app.get('/signup', tweedrControllerCallbacks.signup);
  app.post('/signup', tweedrControllerCallbacks.signupPost);
  app.post('/login', tweedrControllerCallbacks.loginPost);
  app.get('/main', tweedrControllerCallbacks.loadMain);
  app.get('/logout', tweedrControllerCallbacks.logout);
  app.post('/post', tweedrControllerCallbacks.makePost);
  app.get('/tag/new', tweedrControllerCallbacks.newTag);
  app.post('/tag', tweedrControllerCallbacks.addTag);
  app.get('/favourite/new', tweedrControllerCallbacks.newFav);
  app.post('/favourite', tweedrControllerCallbacks.addFav);







};
