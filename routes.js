const sha256 = require("js-sha256");
module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR TWEET CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller
  const mainController = require('./controllers/tweedrController')(allModels);
  

  app.get('/welcome', mainController.welcomePage);
  app.get('/tweedr/home', mainController.home);
  app.get('/register', mainController.registerPage);
  app.post('/register', mainController.register);
  app.get('/login', mainController.logInPage);
  app.post('/login', mainController.login );
  app.post('/addtweet', mainController.addTweet);
  app.get('/tweedr/users', mainController.allUsers);
  app.get('/tweedr/users/:id', mainController.user);
  app.post('/follow', mainController.follow);
  app.get('/tweedr/following', mainController.following);
  
};
