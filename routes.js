module.exports = (app, allModels) => {


    /*
     *  =========================================
     *  =========================================
     *  =========================================
     *  =========================================
     *    ALL ROUTES FOR MAIN CONTROLLER
     *  =========================================
     *  =========================================
     *  =========================================
     */

    // require the controller
    const mainControllerCallbacks = require('./controllers/main')(allModels);

    //home page
    app.get('/', mainControllerCallbacks.index);

    //new user form page
    app.get('/users/new', mainControllerCallbacks.regForm);

    //page to write new tweed
    app.get('/tweeds/new', mainControllerCallbacks.newTweedForm);

    //page to display singular tweeds
    app.get('/tweeds/:id', mainControllerCallbacks.showTweed);

    //page to show ALL tweeds
    app.get('/tweeds', mainControllerCallbacks.showTweeds);

    //page to show ALL users
    app.get('/users', mainControllerCallbacks.showAllUsers);

    //page to just view individual profiles
    app.get('/users/:id/view')

    //page to show users their profile
    app.get('/users/:id', mainControllerCallbacks.showUser);

    //post stuffs===============================================================================================
    //login post request
    app.post('/', mainControllerCallbacks.login);

    //new user post
    app.post('/users', mainControllerCallbacks.register);

    //message post route
    app.post('/tweeds', mainControllerCallbacks.addTweed);
};
