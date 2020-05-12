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
  const homeControllerCallbacks = require('./controllers')(allModels);

  app.get("/", homeControllerCallbacks.home);
  app.get("/register", homeControllerCallbacks.getRegister);
  app.post("/register", homeControllerCallbacks.register);
  // app.get("/login", homeControllerCallbacks.getLogin);
  // app.post("/login", homeControllerCallbacks.login);
  
};
