module.exports = (app, allModels) => {


/* ======================================
   *    ALL ROUTES FOR TWEEDR CONTROLLER
=========================================*/

  // require the controller
  const tweedrControllerCallbacks = require('./controllers/tweedr')(allModels);

  app.get('/tweedr', tweedrControllerCallbacks.tweedr);
  app.post('/tweedr', tweedrControllerCallbacks.tweedr);
  // app.get('/register', tweedrControllerCallbacks.newUser);
  // app.post('/register', tweedrControllerCallbacks.register);

};