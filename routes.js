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
  // const pokemonControllerCallbacks = require('./controllers/pokemon')(allModels);
  // app.get('/pokemons', pokemonControllerCallbacks.index);
  // app.get('/pokemons/:id', pokemons.getPokemon);

  //require register controller
  const registerControllerCallbacks = require('./controllers/register')(allModels);
  app.get('/register', registerControllerCallbacks.index)
  app.post('/register', registerControllerCallbacks.registeruser)

  //require login controller
  const loginControllerCallbacks = require('./controllers/login')(allModels);
  app.get('/login', loginControllerCallbacks.login)
  app.post('/login', loginControllerCallbacks.userinfo)

  //require tweets controller
  const tweetsControllerCallbacks = require('./controllers/tweets')(allModels);
  app.get('/', tweetsControllerCallbacks.listAll)
  app.get('/tweets/new', tweetsControllerCallbacks.index)
  app.post('/tweets', tweetsControllerCallbacks.create)
  
  
  // const helloControllerCallbacks = require('./controllers/hello')(allModels);
  // app.get('/', helloControllerCallbacks.hello)


};
