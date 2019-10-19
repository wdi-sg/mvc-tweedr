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
	const tweetsControllerCallbacks = require('./controllers/tweets')(allModels);

	app.get('/pokemons', pokemonControllerCallbacks.index);
	//app.get('/pokemons/:id', pokemons.getPokemon);
	app.get('/', tweetsControllerCallbacks.getAllTweets);
};
