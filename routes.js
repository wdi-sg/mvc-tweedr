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
  const ControllerCallbacks = require('./controllers/pokemon')(allModels);

  app.get('/login', ControllerCallbacks.login);

  app.post('/login', ControllerCallbacks.verify)




};