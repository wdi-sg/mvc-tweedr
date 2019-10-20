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
  const tweedrControllerCallbacks = require('./controllers/tweets')(allModels);

  app.get('/tweedr', tweedrControllerCallbacks.index);
  //app.get('/pokemons/:id', pokemons.getPokemon);
};
