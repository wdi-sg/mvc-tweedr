module.exports = (app, allModels) => {
  const pokemonControllerCallbacks = require("./controllers/pokemon")(
    allModels
  );

  const tweetsControllerCallbacks = require("./controllers/tweets")(allModels);

  app.get("/pokemons", pokemonControllerCallbacks.index);

  app.get("/", tweetsControllerCallbacks.index);
};
