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

    //ALL USERS 
    const userControllerCallbacks = require('./controllers/users')(allModels);
    app.get("/login", userControllerCallbacks.getLoginForm);
    app.post("/login", userControllerCallbacks.loginUser);

    app.get("/register", userControllerCallbacks.getRegisterForm);
    app.post("/register", userControllerCallbacks.addUser);
    app.get("/logout", userControllerCallbacks.logout)

    app.get(`/users/following`, userControllerCallbacks.showFollowing);
    app.get(`/users/followers`, userControllerCallbacks.showFollowers)
    app.put(`/users/me`, userControllerCallbacks.updateUser);
    app.get(`/users/me/edit`, userControllerCallbacks.getEditUserForm);
    app.get(`/users/me`, userControllerCallbacks.getCurrentUser);
    app.post(`/users/following`, userControllerCallbacks.followUser);
    app.get(`/users/:id`, userControllerCallbacks.getOneUser);
    app.get(`/users`, userControllerCallbacks.getAllUsers);



    const tweetsControllerCallbacks = require('./controllers/tweets')(allModels);
    app.get("/tweets", tweetsControllerCallbacks.getTweets);
    app.post("/tweets", tweetsControllerCallbacks.createTweet);
    app.get("/tweets/:id/edit", tweetsControllerCallbacks.getEditTweetForm);
    app.delete("/tweets/:id", tweetsControllerCallbacks.deleteTweet);
    app.put("/tweets/:id", tweetsControllerCallbacks.updateTweet);
    app.get("/", tweetsControllerCallbacks.index);

    const hashtagControllerCallbacks = require("./controllers/hashtags")(allModels);
    app.get("/hashtags/new", hashtagControllerCallbacks.getHashtagForm);
    // app.get("/hashtags/:id", hashtagControllerCallbacks.getOneHashtag);
    app.get("/hashtags", hashtagControllerCallbacks.displayAllHashtags);
    app.post("/hashtags", hashtagControllerCallbacks.createHashtag);

    const favouritesControllerCallbacks = require('./controllers/favourites')(allModels);
    app.post('/favourites', favouritesControllerCallbacks.addFave);
};