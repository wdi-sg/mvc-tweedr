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
  const tweetControllerCallbacks = require('./controllers/tweet')(allModels);

  app.get('/', tweetControllerCallbacks.index);
  app.get('/register', tweetControllerCallbacks.register);
  //app.get('/pokemons/:id', pokemons.getPokemon);
};
