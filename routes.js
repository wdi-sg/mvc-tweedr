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
    const registerControllerCallbacks = require('./controllers/register')(allModels);
    const loginControllerCallbacks = require('./controllers/login')(allModels);
    const tweetsControllerCallbacks = require('./controllers/tweets')(allModels);
    const paymentControllerCallbacks = require('./controllers/payment')(allModels);

    // app.get('/pokemons', pokemonControllerCallbacks.index);
    //app.get('/pokemons/:id', pokemons.getPokemon);
    app.get('/register', registerControllerCallbacks.registerForm);
    app.post('/register', registerControllerCallbacks.registerUser);

    app.get('/login', loginControllerCallbacks.loginForm);
    app.post('/login', loginControllerCallbacks.loginUser);


    app.get('/tweets', tweetsControllerCallbacks.tweets);

    // Render New Payment Form
    app.get('/payment', paymentControllerCallbacks.getPaymentForm);


};