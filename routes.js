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
  app.get('/login/:id/createTweet',pokemonControllerCallbacks.createTweet);
  app.get('/login/:id/',pokemonControllerCallbacks.showUser);

  app.post('/',pokemonControllerCallbacks.banana)
  app.post('/login', pokemonControllerCallbacks.submitLogin);
  app.post('/login/:id/tweet',pokemonControllerCallbacks.submitTweet)
};
