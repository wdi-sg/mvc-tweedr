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
  const controller = require('./controllers/masterController')(allModels);

//   app.get('/pokemons', pokemonControllerCallbacks.index);
//   //app.get('/pokemons/:id', pokemons.getPokemon);
// };

    // app.get('/', indexControllerCallback.index);
    app.get('/register', controller.register);
    // app.get('/login', pokemons.login);
    };