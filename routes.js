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

const hashtags = require('./controllers/hashtags')(allModels);

// require the controller
  const tweedr = require('./controllers/tweedr')(allModels);
  const users = require('./controllers/users')(allModels);
  const hashtags = require('./controllers/hashtags')(allModels);

  // tweeds
  app.get('/', tweedr.index);
  app.get('/tweeds/new', tweedr.new);
  app.post('/tweeds', tweedr.newTweed);

  // hashtags
  app.get('/hashtags/', hashtags.show);
  app.get('/hashtags/new', hashtags.new);
  app.post('/hashtags', hashtags.newHashtag);

  // users
  app.get('/users/new', users.new);
  app.get('/users/login', users.loginPage);
  app.post('/users', users.newUser);
  app.post('/users/login', users.login);
  app.post('/users/logout', users.logout);
};