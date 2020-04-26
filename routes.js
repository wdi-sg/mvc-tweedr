module.exports = (app, allModels) => {


  // require the controller
  const tweedrControllerCallbacks = require('./controllers/tweedr')(allModels);
//   console.log("this yeah", tweedrControllerCallbacks);
//   {
//   home: [Function: homeControllerCallback],
//   register: [Function: registerControllerCallback],
//   login: [Function: loginControllerCallback],
//   tweets: [Function: tweetControllerCallback],
//   registerPost: [Function: registerPostControllerCallback]
// }

  app.get('/home', tweedrControllerCallbacks.home);

  app.get('/register', tweedrControllerCallbacks.register);

  app.post('/register', tweedrControllerCallbacks.registerPost);

  app.get('/login', tweedrControllerCallbacks.login);

  app.post('/login', tweedrControllerCallbacks.loginPost);

  app.get('/tweets', tweedrControllerCallbacks.tweets);

  app.post('/tweets', tweedrControllerCallbacks.tweetPost);

};
