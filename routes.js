module.exports = (app, allModels) => {



  // require the controller
  const pokemonControllerCallbacks = require('./controllers/pokemon')(allModels);

  app.get('/', pokemonControllerCallbacks.index);
  app.get('/users-register', pokemonControllerCallbacks.users-register);
  app.get('/dashboard', pokemonControllerCallbacks.dashboard);
  //app.get('/pokemons/:id', pokemons.getPokemon);
};
