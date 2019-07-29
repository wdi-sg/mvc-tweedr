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
  const tweedrControllerCallbacks = require('./controllers/tweedr')(allModels);

    // app.get('/', tweedrControllerCallbacks.index);

    app.get('/', tweedrControllerCallbacks.redirect);
    app.get('/tweedr', tweedrControllerCallbacks.home);

    app.get('/tweedr/register', tweedrControllerCallbacks.showform);
    app.post('/tweedr/register', tweedrControllerCallbacks.register);

    app.get('/tweedr/login', tweedrControllerCallbacks.loginForm);
    app.post('/tweedr/login', tweedrControllerCallbacks.login);
    app.get('/tweedr/logout', tweedrControllerCallbacks.logout);


    // app.get('/tweedr/addtweed', tweedrControllerCallbacks.addtweed);
    app.post('/tweedr/addtweed', tweedrControllerCallbacks.addtweedPost);

    app.get('/tweedr/mytweeds', tweedrControllerCallbacks.showMyTweeds);
    app.delete('/tweedr/:id/delete', tweedrControllerCallbacks.deletetweedPost);
};
