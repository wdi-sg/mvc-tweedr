module.exports = (app, allModels) => {


  /*
   *    ALL ROUTES FOR CONTROLLER
   */

  // require the controller
  const tweedrControllerCallbacks = require('./controllers/pokemon')(allModels);

  app.get('/tweedr', tweedrControllerCallbacks.index);

  app.get('/tweedr/register', tweedrControllerCallbacks.register);

  app.get('tweedr/login', tweedrControllerCallbacks.login);

  // app.post('/tweedr/register', tweedrControllerCallbacks.register)

  // app.post('/tweedr/login', tweedrControllerCallbacks.login)

};