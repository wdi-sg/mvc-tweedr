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
  const controllerCallbacks = require('./controllers/tweedr')(allModels);
  const postCallbacks = require('./controllers/post')(allModels);


  app.get('/', controllerCallbacks.redirect);
  app.get('/tweedr',controllerCallbacks.index);
  app.get('/tweedr/login',controllerCallbacks.login);
  app.get('/tweedr/register',controllerCallbacks.register);
  app.post('/tweedr/add_user',postCallbacks.add_user);

  //app.get('/pokemons/:id', pokemons.getPokemon);
};
