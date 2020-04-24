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
  const tweedrCallbacks = require('./controllers/tweedr')(allModels);

  app.get('/register', tweedrCallbacks.register);
  app.post('/register', tweedrCallbacks.registerPost)
  
  //app.get('/pokemons/:id', pokemons.getPokemon);
};
