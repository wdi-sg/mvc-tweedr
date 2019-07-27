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
    const loginControllerCallbacks = require('./controllers/twitter')(allModels);
    const newAccountCallback = require('./controllers/twitter')(allModels);
    const loginCheckCallbacks = require('./controllers/twitter')(allModels);
    const newAccountCheckCallbacks = require('./controllers/twitter')(allModels);
    const homePageCallbacks = require('./controllers/twitter')(allModels);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    app.get('/twee_dr/homepage/:name', homePageCallbacks.homePage)
    app.post('/twee_dr/create', newAccountCheckCallbacks.newAccountCheck);
    app.get('/twee_dr/create', newAccountCallback.newAccount);
    app.post('/twee_dr/login', loginCheckCallbacks.loginCheck);
    app.get('/twee_dr', loginControllerCallbacks.login);
  //app.get('/pokemons/:id', pokemons.getPokemon);
};