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
  const twitterControllerCallbacks = require('./controllers/twitter')(allModels);

  app.get('/', twitterControllerCallbacks.index);
  //app.get('/pokemons/:id', twitter.getTwitter);
};
