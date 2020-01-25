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
  app.get("/register", tweedrCallbacks.showRegisterForm);
  app.post("/register", tweedrCallbacks.registerUser)
  //app.get('/pokemons/:id', pokemons.getPokemon);
};
