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
  const userControllerCallbacks = require('./controllers/users')(allModels);
  const messageControllerCallbacks = require('./controllers/messages')(allModels);

  app.get('/pokemons', pokemonControllerCallbacks.index);
  //app.get('/pokemons/:id', pokemons.getPokemon);

  app.get('/signin', userControllerCallbacks.signInPage);

  app.post('/signin', userControllerCallbacks.signIn);

  app.get('/login', userControllerCallbacks.signInPage);

  app.get('/register', userControllerCallbacks.registerPage);

  app.post('/register', userControllerCallbacks.registerAccount);

  app.get('/check', userControllerCallbacks.checkIfSignedIn);

  app.get('/messages/new', messageControllerCallbacks.newMessageForm);

  app.post('/messages/', messageControllerCallbacks.postNewMessage);
};
