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

  const tweedrCallbacks = require("./controllers/tweedr")(allModels);
  app.get("/", tweedrCallbacks.showHomepage);
  app.get("/register", tweedrCallbacks.showRegisterForm);
  app.post("/register", tweedrCallbacks.registerUser);
  app.get("/login", tweedrCallbacks.showLoginForm);
  app.post("/login", tweedrCallbacks.loginUser);
  app.get("/logout", tweedrCallbacks.logoutUser);
  app.get("/tweed", tweedrCallbacks.newTweed);
  app.post("/tweed", tweedrCallbacks.postTweed);
  //app.get('/pokemons/:id', pokemons.getPokemon);
};
