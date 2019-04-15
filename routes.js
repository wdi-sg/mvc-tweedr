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
  //  app.get('/pokemons', pokemonControllerCallbacks.index);
  // //app.get('/pokemons/:id', pokemons.getPokemon);

  //THIS ROUTE IS THE HOMEPAGE
  const homeControllerCallbacks = require('./controllers/homepage')(allModels);
  app.get('/', homeControllerCallbacks.index);

  // THIS ROUTE CREATES A NEW USER
  const newUser = require('./controllers/register')(allModels);
  app.get('/register', newUser.index);

  //THIS ROUTE LOGS IN CURRENT USER
  const loginControllerCallbacks = require('./controllers/login')(allModels);
  app.get('/login', loginControllerCallbacks.index);
  app.post('/login', loginControllerCallbacks.userVerify);

  //THIS ROUTE SHOWS USER PAGE AFTER LOGIN
  const userPage = require('./controllers/userpage')(allModels);
  // app.get('/user', userPage.index);
  app.get('/user/:id', userPage.index);

  //THIS ROUTE SENDS NEW TWEET TO DATABASE
  const newTweed = require('./controllers/newtweed')(allModels);
  app.post('/newtweed', newTweed.index);


  const usersControllerCallbacks = require('./controllers/users')(allModels);
  app.get('/users', usersControllerCallbacks.index);
  app.get('/users/:id', usersControllerCallbacks.index);


};