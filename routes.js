module.exports = (app, allModels) => {
  
  //Require the controller
  const usersController = require("./controllers/users")(allModels);
  const tweetsController = require("./controllers/tweets")(allModels);
  const hashtagsController = require("./controllers/hashtags")(allModels);

  //ROUTES

  app.get("/", usersController.displayLoginPage);

  app.get("/register", usersController.displayRegistration);

  app.post("/register", usersController.submitRegistration);

  app.post("/home", usersController.submitLogin);

  app.get("/home", usersController.displayHomePage);

  app.get("/logout", usersController.logout);

  app.get("/tweets", tweetsController.showAllTweets);

  app.get("/tweets/new", tweetsController.displayNewTweetForm);

  app.post("/tweets/new", tweetsController.submitNewTweet);

  app.get("/tweets/:id", tweetsController.showOneTweet);

  app.get("/hashtags/new", hashtagsController.displayNewHashtagForm);

  app.post("/hashtags/new", hashtagsController.submitNewHashtag);

  app.get("/hashtags", hashtagsController.displayAllHashtags);

};
