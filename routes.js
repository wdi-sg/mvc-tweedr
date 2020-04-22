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
    const tweetsControllerCallbacks = require('./controllers/tweets')(allModels);

    app.get('/', tweetsControllerCallbacks.index);
  //app.get('/pokemons/:id', pokemons.getPokemon);

    app.get('/register', tweetsControllerCallbacks.register);

    app.post('/register', tweetsControllerCallbacks.registerForm);

    app.get('/login', tweetsControllerCallbacks.loginPage);

    app.post('/login', tweetsControllerCallbacks.login);

};