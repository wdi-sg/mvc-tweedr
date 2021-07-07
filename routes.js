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

  // app.get('/pokemons', pokemonControllerCallbacks.index);
  //app.get('/pokemons/:id', pokemons.getPokemon);

  app.get('/', pokemonControllerCallbacks.landingPage )

  app.get('/home', pokemonControllerCallbacks.allTweets )

  app.get('/register', pokemonControllerCallbacks.registerForm )
  app.post('/users', pokemonControllerCallbacks.createUser )

  app.get('/pictures', pokemonControllerCallbacks.pictureForm)
  app.post('/pictures', pokemonControllerCallbacks.uploadPics)

  app.get('/login', pokemonControllerCallbacks.loginForm )
  app.post('/login', pokemonControllerCallbacks.login )

  app.post('/tweet', pokemonControllerCallbacks.createTweet)

  app.post('/edit', pokemonControllerCallbacks.editTweet)

  app.post('/delete', pokemonControllerCallbacks.deleteTweet)

  app.post('/logout', pokemonControllerCallbacks.logout )
};