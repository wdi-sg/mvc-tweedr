module.exports = (app, allModels) => {


/* ======================================
   *    ALL ROUTES FOR TWEEDR CONTROLLER
=========================================*/

  // require the controller
  const tweedrControllerCallbacks = require('./controllers/tweedr')(allModels);

  app.get('/register', tweedrControllerCallbacks.registerUser);
  app.post('/register', tweedrControllerCallbacks.register);

  app.get('/login', tweedrControllerCallbacks.loginUser);
  app.post('/login', tweedrControllerCallbacks.register);

  app.get('/message', tweedrControllerCallbacks.createMessage);
  app.post('/message', tweedrControllerCallbacks.newMessage);




};