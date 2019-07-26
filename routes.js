module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR MAIN CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller
  const mainControllerCallbacks = require('./controllers/mainController')(allModels);

  app.get('/main', mainControllerCallbacks.index);
  //app.get('/pokemons/:id', pokemons.getPokemon);
};
