module.exports = (app, allModels) => {
  //    ALL ROUTES FOR USERS CONTROLLER

  // require the controller
  const homeControllerCallbacks = require("./controllers/index")(allModels);
  const usersControllerCallbacks = require("./controllers/users")(allModels);
  const paymentsControllerCallbacks = require("./controllers/payments")(allModels);

  app.get("/", homeControllerCallbacks.home);
  app.get("/register", homeControllerCallbacks.getRegister);
  app.post("/register", homeControllerCallbacks.register);
  app.get("/login", homeControllerCallbacks.getLogin);
  app.post("/login", homeControllerCallbacks.login);
  app.get("/users", usersControllerCallbacks.users);
  app.post("/users", usersControllerCallbacks.newTweet);
  app.get("/users/:id", usersControllerCallbacks.user);
  // added for payments
  app.get("/payments/received/", paymentsControllerCallbacks.paymentsReceived);
  app.get("/payments/sent/", paymentsControllerCallbacks.paymentsSent);
  // app.get('/users/:id', users.getUsers);
};
