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
  app.post('/tweedr/login_user',postCallbacks.login_user);
  app.get('/tweedr/logout',controllerCallbacks.logout_user);
  app.get('/tweedr/add_tweet',controllerCallbacks.add_tweet);
  app.post('/tweedr/add_tweet_post',postCallbacks.add_tweet_post);
  app.get('/tweedr/:id',controllerCallbacks.single_user);

  //app.get('/pokemons/:id', pokemons.getPokemon);
};
