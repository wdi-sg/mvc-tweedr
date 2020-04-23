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
  const tweedrAllControllers = require('./controllers/tweedr_controllers')(allModels);

  // GET requests
  app.get('/', tweedrAllControllers.indexGet);

  app.get('/register', tweedrAllControllers.registerGet);

  app.get('/login', tweedrAllControllers.loginGet);

  //POST requests
  app.post('/register', tweedrAllControllers.registerPost);

  app.post('/login', tweedrAllControllers.loginPost)

  app.post('/create', tweedrAllControllers.createPost)


};
