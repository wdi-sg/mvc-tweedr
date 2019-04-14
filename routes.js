module.exports = (app, allModels) => {

  const pokemonControllerCallbacks = require('./controllers/pokemon')(allModels);
  app.get('/pokemons', pokemonControllerCallbacks.index);




  const tweedrControllerCallbacks = require('./controllers/tweedr_controller')(allModels);
  app.get('/', tweedrControllerCallbacks.index);
  app.post('/tweet/create', tweedrControllerCallbacks.tweetCreate);
  //app.get('/pokemons/:id', pokemons.getPokemon);
};
