module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller
  const tweedrControllerCallbacks = require('./controllers/tweedr')(allModels);

  app.get('/', tweedrControllerCallbacks.index);

  app.get('/register', tweedrControllerCallbacks.userNew);

  app.post('/register', tweedrControllerCallbacks.userCreate);

  app.get('/login', tweedrControllerCallbacks.userLogin);

  app.post('/login', tweedrControllerCallbacks.userLoggedIn);
  //app.get('/pokemons/:id', pokemons.getPokemon);
};
