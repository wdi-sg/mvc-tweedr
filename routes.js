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

    /*
     *  =========================================
     *  =========================================
     *  =========================================
     *  =========================================
     *              GET Routes
     *  =========================================
     *  =========================================
     *  =========================================
     */


    //home page
    app.get('/', mainControllerCallbacks.index);
    //page to write new tweed
    app.get('/tweeds/new', mainControllerCallbacks.newTweedForm);
    //page to display singular tweeds
    app.get('/tweeds/:id', mainControllerCallbacks.showTweed);
    //page to show ALL tweeds
    app.get('/tweeds', mainControllerCallbacks.showTweeds);
    //page to get the form to edit your own profile
    app.get('/users/:id/edit', mainControllerCallbacks.editProfile);
    //page to show users their profile
    app.get('/users/:id', mainControllerCallbacks.showProfile);
    //new user form page
    app.get('/users/new', mainControllerCallbacks.regForm);
    //page to show ALL users
    app.get('/users', mainControllerCallbacks.showAllUsers);


    /*
     *  =========================================
     *  =========================================
     *  =========================================
     *  =========================================
     *              POST Routes
     *  =========================================
     *  =========================================
     *  =========================================
     */


    //login post request
    app.post('/', mainControllerCallbacks.login);
    //new user post
    app.post('/users', mainControllerCallbacks.register);
    //message post route
    app.post('/tweeds', mainControllerCallbacks.addTweed);


        /*
     *  =========================================
     *  =========================================
     *  =========================================
     *  =========================================
     *              PUT Routes
     *  =========================================
     *  =========================================
     *  =========================================
     */




    /*
     *  =========================================
     *  =========================================
     *  =========================================
     *  =========================================
     *              DELETE Routes
     *  =========================================
     *  =========================================
     *  =========================================
     */


};
