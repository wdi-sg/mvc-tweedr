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
    const tweedrControllerCallbacks = require('./controllers/tweedr')(allModels);

    app.get('/', tweedrControllerCallbacks.test);
    app.get('/register', tweedrControllerCallbacks.registerForm);
    app.get('/login', tweedrControllerCallbacks.loginForm)
    app.post('/register', tweedrControllerCallbacks.register);
    app.post('/login', tweedrControllerCallbacks.login);
};