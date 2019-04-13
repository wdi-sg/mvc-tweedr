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
  //app.get('/pokemons/:id', pokemons.getPokemon);

  const homeControllerCallbacks = require('./controllers/homepage')(allModels);
  app.get('/', homeControllerCallbacks.index);

  const usersControllerCallbacks = require('./controllers/users')(allModels);
  app.get('/users', usersControllerCallbacks.index);

  const loginControllerCallbacks = require('./controllers/login')(allModels);
  app.get('/login', loginControllerCallbacks.index);
  app.post('/login', loginControllerCallbacks.index);
};