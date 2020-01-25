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

  app.get('/',pokemonControllerCallbacks.showAllTweets); 
  app.get('/pokemons', pokemonControllerCallbacks.index);
  app.get('/login', pokemonControllerCallbacks.displayLogin);
  app.get('/login/:id',pokemonControllerCallbacks.createTweet);

  app.post('/login', pokemonControllerCallbacks.submitLogin);
  app.post('/login/:id/tweet',pokemonControllerCallbacks.submitTweet)
};
