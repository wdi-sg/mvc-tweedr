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

    app.post('/newtweet',           mainController.newTweet);
    app.post('/newFollow',          mainController.newFollow);
    app.post('/register',           mainController.registerPost);
    app.post('/login',              mainController.loginPost);
    app.get('/follows/followings',  mainController.listFollowing);
    app.get('/related',             mainController.getRelatedTwts);
    app.get('/follows',             mainController.follows);
    app.get('/profile',             mainController.profile);
    app.get('/register',            mainController.register);
    app.get('/logout',              mainController.logout);
    app.get('/login',               mainController.login);
    app.get('/',                    mainController.index);
    //app.get('/follows/followings', mainController.followers);
    // app.get('/newtweet', mainController.newForm);
};
