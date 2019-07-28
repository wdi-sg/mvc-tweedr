module.exports = (app, allModels) => {


    /*
     *  =========================================
     *  =========================================
     *  =========================================
     *  =========================================
     *        ALL ROUTES FOR MAIN CONTROLLER
     *  =========================================
     *  =========================================
     *  =========================================
     */

    // require the controllers
    const mainController = require('./controllers/mainController')(allModels);

    app.post('/newtweet', mainController.loadNewTweet);
    app.post('/login', mainController.loginUser);
    app.post('/register', mainController.registerUser);
    app.get('/register', mainController.registerForm);
    app.get('/login', mainController.loginForm);
    app.get('/logout', mainController.logout);
    app.get('/', mainController.home);
    app.get('/newtweet', mainController.newForm);

};
