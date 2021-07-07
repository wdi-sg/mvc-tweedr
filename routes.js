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
  const users = require('./controllers/users')(allModels);
  app.get('/',users.mainTweetHandler);//show all tweets
  app.get('/register', users.registerHandler);//create id and password
  app.post('/register',users.newAccountHandler);
  app.get('/login', users.loginHandler);//check id and password
  app.post('/login',users.verifyHandler); //log user in
  app.get('/logout',users.logoutHandler);
  

  
};