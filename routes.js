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

  app.get('/', tweedrControllerCallbacks.index);
  // app.get('/tweet/:id', tweedrControllerCallbacks.viewTweet);
};
