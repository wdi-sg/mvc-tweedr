module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR MAIN CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller
const mainControllerCallbacks = require('./controllers/maincontroller')(allModels);


//Send a request to create a register form
app.get('/register', mainControllerCallbacks.registerRequest);
app.post('/register', mainControllerCallbacks.registerPost);
app.get('/login', mainControllerCallbacks.loginRequest);
app.get('/tweedr/new', mainControllerCallbacks.newTweetRequest);
app.post('/tweedr', mainControllerCallbacks.newTweetPost);
app.get('/', mainControllerCallbacks.homeRequest);
//++++++++++need to fix this+++++++++++//
app.post('/login', mainControllerCallbacks.loginAuth);
};