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
    app.post('/newFollow', mainController.addNewFollow);
    app.post('/login', mainController.loginUser);
    app.post('/register', mainController.registerUser);
    app.get('/profile', mainController.checkProfile);
    app.get('/register', mainController.registerForm);
    app.get('/login', mainController.loginForm);
    app.get('/logout', mainController.logout);
    app.get('/follows/followings', mainController.followings);
    //app.get('/follows/followings', mainController.followers);
    app.get('/follows', mainController.follows);
    app.get('/newtweet', mainController.newForm);
    app.get('/related', mainController.getMy);
    app.get('/', mainController.home);
};
