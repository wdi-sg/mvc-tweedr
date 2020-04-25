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

  app.get('/pokemons', pokemonControllerCallbacks.index);

  app.get('/', pokemonControllerCallbacks.viewHome);

  app.get('/tweet', pokemonControllerCallbacks.newTweet);

  app.post('/tweet', pokemonControllerCallbacks.submitTweet);

  app.get('/login', pokemonControllerCallbacks.viewLogin);

  app.post('/login', pokemonControllerCallbacks.loginAccount);

  app.get('/register', pokemonControllerCallbacks.viewRegister);

  app.post('/register', pokemonControllerCallbacks.registerAccount);

  app.get('/hashtag/new', pokemonControllerCallbacks.viewNewHashTag);

  app.get('/hashtag', pokemonControllerCallbacks.viewHashTag);

  app.post('/hashtag', pokemonControllerCallbacks.submitNewHashTag);

  app.post('/favorite', pokemonControllerCallbacks.submitNewFavorite);
};