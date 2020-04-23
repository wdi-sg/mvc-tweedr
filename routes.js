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
  const tweedrLogin = require('./controllers/tweedr')(allModels);

  app.get('/login', tweedrLogin.loginCallback);
  //app.get('/pokemons/:id', pokemons.getPokemon);
};
