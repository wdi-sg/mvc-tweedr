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
    app.get('/payment/new', paymentControllerCallbacks.getPaymentForm);

    // Post new payment
    app.post('/payment', paymentControllerCallbacks.postPayment);

    // Get payment by sender_id
    app.get('/payment/sender/:sender_id', paymentControllerCallbacks.getPaymentBySender);

    // Get payment by recipient_id
    app.get('/payment/recipient/:recipient_id', paymentControllerCallbacks.getPaymentByRecipient);

    // GET payment total by sender
    app.get('/payment/sender/:sender_id/total', paymentControllerCallbacks.getTotalPaymentBySender);
};