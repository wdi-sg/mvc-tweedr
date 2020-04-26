module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR TWEEDR CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the LOGIN controller
  const tweedrLogin = require('./controllers/log-in')(allModels);

//logging in
  app.get('/login', tweedrLogin.loginCallback);
  app.post('/login', tweedrLogin.loginCheck);

// require the NEW TWEET controller
  const newTweed = require('./controllers/new-tweed')(allModels);

  //create a new tweed
  app.get('/newtweed', newTweed.newTweedFormController);

    app.post('/newtweed', newTweed.newTweedPost);

  // require the ALL TWEEDS controller
  const allTweeds = require('./controllers/all-tweeds')(allModels);

  app.get('/', allTweeds.allTweedscontroller);
};
