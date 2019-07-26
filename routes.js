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
    app.get('/homepage', homePageCallbacks.homePage)
    app.post('/create', newAccountCheckCallbacks.newAccountCheck);
    app.get('/create', newAccountCallback.newAccount);
    app.post('/login', loginCheckCallbacks.loginCheck);
    app.get('/login', loginControllerCallbacks.login);
  //app.get('/pokemons/:id', pokemons.getPokemon);
};