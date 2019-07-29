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
  const loginControllerCallbacks = require('./controllers/login')(allModels);
  const registerControllerCallbacks = require('./controllers/register')(allModels);
  const tweetControllerCallbacks = require('./controllers/tweets')(allModels);



  app.get('/tweedr', loginControllerCallbacks.index);
  app.post('/tweedr/register', registerControllerCallbacks.signup);
  app.post('/tweedr/home', loginControllerCallbacks.check);
  app.get('/tweedr/home', tweetControllerCallbacks.index);
  app.get('/tweedr/register', registerControllerCallbacks.index);
};