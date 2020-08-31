module.exports = (app, allModels) => {

  const callBackController = require('./controllers/control')(allModels);

  app.get('/', callBackController.displayLoginPage)
  app.get('/feed', callBackController.displayAllFeed)
  // app.post('/',callBackController.displayLoginPage)
  app.post('/profile', callBackController.loggedIn)
  app.post('/register', callBackController.register)

  app.put('/tweets', callBackController.insertTweets)
  app.get('/profile/:user', callBackController.profilePage);

};