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

  const usersControllerCallbacks = require('./controllers/user')(allModels);

  app.get('/register', usersControllerCallbacks.registerForm );
  app.post('/register', usersControllerCallbacks.registerPost );

};


//   // require the controller
//   const pokemonControllerCallbacks = require('./controllers/pokemon')(allModels);

//   app.get('/pokemons', pokemonControllerCallbacks.index);
//   //app.get('/pokemons/:id', pokemons.getPokemon);
// };





  // const pokemonControllerCallbacks = require('./controllers/pokemon')(allModels);

  // app.get('/pokemons', pokemonControllerCallbacks.index);
  // app.get('/banana', pokemonControllerCallbacks.chicken);
  //app.get('/pokemons/:id', pokemons.getPokemon);