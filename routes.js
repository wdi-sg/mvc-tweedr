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
  const users = require('./controllers/users')(allModels);
  const tweeds = require('./controllers/tweeds')(allModels);

  app.get('/pokemons', pokemonControllerCallbacks.index);
  //app.get('/pokemons/:id', pokemons.getPokemon);

  app.get('/register', users.registerForm);
  //app.get('register', users('controller').registerFormCallback);

  app.post('/registered', users.postRegister);
  //app.get('registered', users('controller').postRegisterCallback);

  app.get('/login', users.loginForm);
  //app.get('login', users('controller').loginFormCallback);

  app.post('/loggedin', users.postLogin);
  //app.get('loggedin', users('controller').postLoginFormCallback);

  app.get('/', tweeds.home);
  //app.get('register', users('controller').registerFormCallback);
};
