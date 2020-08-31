module.exports = function (app, allModels) {
    const userController = require('./controllers/user')(allModels);
    const tweetController = require('./controllers/tweet')(allModels);

    app.get('/', tweetController.homeRequestHandler);
    app.post('/tweet', tweetController.addNewTweetRequestHandler);

    app.get('/login', userController.loginRequestHandler);
    app.post('/login', userController.authenticateRequestHandler);

    app.get('/logout', userController.logoutRequestHandler);

    app.get('/register', userController.registerRequestHandler);
    app.post('/register', userController.createAccountRequestHandler);
};