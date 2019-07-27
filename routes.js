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
  const tweedrCC = require('./controllers/tweedr')(allModels);

  app.get('/', tweedrCC.allTweets);

  app.get('/login', tweedrCC.login);

  //note: post doesn't seem to work here even though the form is post
  app.get('/signup', tweedrCC.signup);

  app.get('/logout', tweedrCC.logout);
};