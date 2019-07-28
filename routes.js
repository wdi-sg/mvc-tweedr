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
    const homePagePostCallbacks = require('./controllers/twitter')(allModels);
    const profilePageCallbacks = require('./controllers/twitter')(allModels);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    app.get('/twee_dr/profile/:id', profilePageCallbacks.profilePage);
    app.post('/twee_dr/homepage/:id/post',homePagePostCallbacks.homePagePost);
    app.get('/twee_dr/homepage/:id', homePageCallbacks.homePage);
    app.post('/twee_dr/create', newAccountCheckCallbacks.newAccountCheck);
    app.get('/twee_dr/create', newAccountCallback.newAccount);
    app.post('/twee_dr/login', loginCheckCallbacks.loginCheck);
    app.get('/twee_dr', loginControllerCallbacks.login);
  //app.get('/pokemons/:id', pokemons.getPokemon);
};