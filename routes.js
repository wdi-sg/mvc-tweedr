module.exports = (app, allModels) => {
  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR TWEED CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller
  const tweedCtrl = require('./controllers/tweed')(allModels);



  app.get('/register', tweedCtrl.registerForm);
  app.post('/register', tweedCtrl.addNewUser);
  app.get('/register/status', tweedCtrl.registerStat);
  app.get('/login', tweedCtrl.loginForm);
  app.post('/login', tweedCtrl.loginCheck);
  app.delete('/logout', tweedCtrl.logout);
  app.get('/all', tweedCtrl.tweedPage);
  app.post('/all', tweedCtrl.tweedMessage);
  app.get('/hashtag', tweedCtrl.hashtagForm);
  app.post('/hashtag', tweedCtrl.addHashtag);
  app.get('/favourite/new', tweedCtrl.FavForm)
  app.post('/favourite', tweedCtrl.addFav)

  app.get('/', tweedCtrl.tweedModHome);
};
