module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR TWEEDR CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller
  const tweedrControllerCallbacks = require('./controllers/tweedr')(allModels);

  app.get('/', tweedrControllerCallbacks.index);
  app.get('/register', tweedrControllerCallbacks.register);

  //app.get('/pokemons/:id', pokemons.getPokemon);
};