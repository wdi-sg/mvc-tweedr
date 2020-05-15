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
  const controller = require('./controllers/mastercontroller')(allModels);
app.get(`/new`, controller.tweetForm);
app.post(`/`, controller.createTweet);
// app.get(`/`, controller.loadTweets);
app.get(`/register`, controller.registrationForm);
app.post(`/register`, controller.registerUser);
app.get(`/login`, controller.loginPage);
app.post(`/login`, controller.userAuthentication);
};