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
  // const pokemonControllerCallbacks = require('./controllers/pokemon')(allModels);
  const tweetControllerCallbacks = require('./controllers/tweets')(allModels);


  app.get('/tweedr/home', tweetControllerCallbacks.index);
  //app.get('/pokemons/:id', pokemons.getPokemon);
};