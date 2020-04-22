module.exports = (app, allModels) => {
  
  //Require the controller
  const usersController = require("./controllers/users")(allModels);
  const tweetsController = require("./controllers/tweets")(allModels);

  //ROUTES

  app.get("/", usersController.displayLoginPage);

  app.get("/register", usersController.displayRegistration);

  app.post("/register", usersController.submitRegistration);

  app.post("/home", usersController.submitLogin);

  app.get("/logout", usersController.logout);

  app.get("/tweets/new", tweetsController.displayNewTweetForm);

  app.post("/tweets/new", tweetsController.submitNewTweet);
};
