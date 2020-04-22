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
  const homeControllerCallback = require('./controllers/home')(allModels);

  app.get('/', homeControllerCallback.homeModelCallback);
  //app.get('/pokemons/:id', pokemons.getPokemon);
};
