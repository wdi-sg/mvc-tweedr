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
  const pokemonControllerCallbacks = require('./controllers/pokemon')(allModels);
const homeControllerCallbacks = require('./controllers/home')(allModels);


  app.get('/', homeControllerCallbacks.index);
  //app.get('/pokemons/:id', pokemons.getPokemon);
};