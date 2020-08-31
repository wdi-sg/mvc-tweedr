const { tweedr, tweed } = require('./db');

module.exports = (app, allModels) => {


  // require the controller
  const tweedrControllerCallbacks = require('./controllers/tweedr_controller')(allModels);

  app.get('/', tweedrControllerCallbacks.welcome);
  app.get('/login', tweedrControllerCallbacks.login);
  app.post('/verification', tweedrControllerCallbacks.verifyInfo);
  app.get('/register', tweedrControllerCallbacks.register);
  app.post('/registered', tweedrControllerCallbacks.registerInfo);
  app.get('/:id', tweedrControllerCallbacks.userTweeds);

  const tweedControllerCallbacks = require('./controllers/tweed_controller')(allModels);

};
