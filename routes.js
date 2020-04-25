module.exports = (app, allModels) => {

 // =========================================
 //    ALL ROUTES FOR CONTROLLER
 // =========================================

    // require the controller
    const controllers = require('./controllers/controller')(allModels);

    // ==== Main Page ====
    app.get('/', controllers.main);

    // ==== Login Page ====
    app.get('/login/', controllers.login);
    app.post('/home/', controllers.verifyLogin);

    // ==== Home Page ====
    app.get('/home/', controllers.home);

    // ==== Make a Tweet ====
    app.get('/home/tweet/new', controllers.newTweet)
    app.post('/home/tweet', controllers.showTweet);

    // ==== List of all Tweets ====
    app.get('/home/tweets', controllers.allTweets);

    // ==== List of all users ====
    app.get('/home/users', controllers.allUsers)

    //User Profile
    app.get('/home/users/:id', controllers.user)
};