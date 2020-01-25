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
    app.get('/users/new', mainControllerCallbacks.register);



    //post stuffs===============================================================================================
    app.post('/', mainControllerCallbacks.login);
};
