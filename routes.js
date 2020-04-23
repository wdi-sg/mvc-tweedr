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

  const userControllerCallbacks = require('./controllers/users')(allModels);
  app.get("/login", userControllerCallbacks.getLoginForm);
  app.post("/login", userControllerCallbacks.loginUser);

  app.get("/register", userControllerCallbacks.getRegisterForm);
  app.post("/register", userControllerCallbacks.addUser);
  app.get("/logout", userControllerCallbacks.logout)

  app.get(`/users`, userControllerCallbacks.getAllUsers);
  app.post(`/users/following`, userControllerCallbacks.followUser);



  const tweetsControllerCallbacks = require('./controllers/tweets')(allModels);
  app.get("/tweets", tweetsControllerCallbacks.getTweets);
    app.post("/tweets", tweetsControllerCallbacks.createTweet);


  app.get("/", tweetsControllerCallbacks.index);

};
