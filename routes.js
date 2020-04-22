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
    const indexControllerCallbacks = require('./controllers/tweedr')(allModels);
    const registerControllerCallbacks = require('./controllers/tweedr')(allModels);
    const registerCompleteControllerCallbacks = require('./controllers/tweedr')(allModels);


    // app.get('/pokemons', pokemonControllerCallbacks.index);
    app.get('/home', indexControllerCallbacks.index)
    app.get('/register', registerControllerCallbacks.register)
    app.post('/register-done', registerCompleteControllerCallbacks.registerDone)
    // app.get('register-done', registerCompleteControllerCallbacks.registerDone)
};