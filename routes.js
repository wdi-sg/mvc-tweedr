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
  app.get("/users/:id", tweedrCallbacks.showUser);
  app.get("/users/:id/follow", tweedrCallbacks.followUser);
  app.get("/following", tweedrCallbacks.seePostsOfFollowing);
  app.get("/followers", tweedrCallbacks.seePostsOfFollowers);
  app.get("/tweeds/:id", tweedrCallbacks.showTweed);
  app.get("/sort", tweedrCallbacks.sortTweedsByDate);
  app.get("/tweeds/:id/edit", tweedrCallbacks.showEditTweedPage);
  app.put("/tweeds/:id", tweedrCallbacks.editTweed);
  app.get("/tweeds/:id/delete", tweedrCallbacks.showDeleteTweedPage);
  app.delete("/tweeds/:id", tweedrCallbacks.deleteTweed);
  //app.get('/pokemons/:id', pokemons.getPokemon);
};
