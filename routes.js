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
    const tweedrControllerCallbacks = require('./controllers/home')(allModels);

    const home = require('./controllers/home')(allModels);
    app.get('/', home.index);
    //app.get('/pokemons/:id', pokemons.getPokemon);

    app.get('/login',home.getLogin)

    app.post('/login',home.postLogin)

    app.get('/register',home.getRegister)

    app.post('/register',home.postRegister)
};