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
  const userControllerCallbacks = require('./controllers/user')(allModels);
  const tweetControllerCallbacks = require('./controllers/tweet')(allModels);
  app.get('/pokemons', pokemonControllerCallbacks.index);
  app.get('/login', userControllerCallbacks.login);
  app.post('/login', userControllerCallbacks.loggedIn);
  app.get('/', tweetControllerCallbacks.listTweet);
  app.get('/tweet', tweetControllerCallbacks.makeTweet);
  app.post('/tweet', tweetControllerCallbacks.addTweet);
};