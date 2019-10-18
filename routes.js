module.exports = (app, allModels) => {
  //    ALL ROUTES FOR USERS CONTROLLER

  // require the controller
  const homeControllerCallbacks = require("./controllers/index")(allModels);
  const usersControllerCallbacks = require("./controllers/users")(allModels);

  app.get("/", homeControllerCallbacks.home);
  app.get("/register", homeControllerCallbacks.getRegister);
  app.post("/register", homeControllerCallbacks.register);
  app.get("/login", homeControllerCallbacks.login);
  app.get("/users", usersControllerCallbacks.users);
  app.get("/users/:id/new", usersControllerCallbacks.newTweet);
  app.get("/users/:id", usersControllerCallbacks.user);
  // app.get('/users/:id', users.getUsers);
};
