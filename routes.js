module.exports = (app, allModels) => {


    /*
     *  =========================================
     *  =========================================
     *  =========================================
     *  =========================================
     *    ALL ROUTES FOR TWEEDR CONTROLLER
     *  =========================================
     *  =========================================
     *  =========================================
     */

    // require the controller


    const tweetsControllerCallbacks = require('./controllers/tweets')(allModels);
    const registerControllerCallbacks = require('./controllers/register')(allModels);
    const loginControllerCallbacks = require('./controllers/login')(allModels);
    const paymentControllerCallbacks = require('./controllers/payments')(allModels);

    app.get('/tweets', tweetsControllerCallbacks.index);

    app.get('/tweets/new', tweetsControllerCallbacks.new);
    app.post('/tweets', tweetsControllerCallbacks.postNew)

    app.get('/register', registerControllerCallbacks.index);
    app.post('/register', registerControllerCallbacks.registerPost);

    app.get('/login', loginControllerCallbacks.index);
    app.post('/login', loginControllerCallbacks.login);

    app.get('/payments', paymentControllerCallbacks.index);
    app.get('/payments/new', paymentControllerCallbacks.new)
    app.post('/payments', paymentControllerCallbacks.postPayment)
};