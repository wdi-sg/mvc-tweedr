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
  const controllerCallbacks = require('./controllers/pokemon')(allModels);

  app.get('/', controllerCallbacks.homePage);

  app.get('/login',controllerCallbacks.loginPage);
  app.post('/login',controllerCallbacks.checkUser);

  app.get('/register',controllerCallbacks.registerPage);
  app.post('/register',controllerCallbacks.getNew);

  app.get('/logout', controllerCallbacks.logOut);

  app.get('/profile', controllerCallbacks.profilePage);

  app.post('/profile', controllerCallbacks.addTweet)
  //app.get('/pokemons/:id', pokemons.getPokemon);
};