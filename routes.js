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

    // required controllers for login page, home page
    const loginControllerCallbacks = require('./controllers/login')(allModels);
    const homeControllerCallbacks = require('./controllers/home')(allModels);

    // require the controller for users
    // const tweedsControllerCallbacks = require('./controllers/tweeds')(allModels);

    app.get('/login', loginControllerCallbacks.login); //--okay
    app.post('/login', loginControllerCallbacks.successL); //-- once logged in user would be directed to home page

    app.get('/register', loginControllerCallbacks.register);
    app.post('/register', loginControllerCallbacks.successR);

    app.get('/home', homeControllerCallbacks.home);
    app.post('/addtweeds', homeControllerCallbacks.add);

};