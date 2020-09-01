module.exports = (app, allModels) => {


  // require controllers
  const usersController = require('./controllers/users')(allModels);
  const tweedsController = require('./controllers/tweeds')(allModels);

//routes for tweeds
  app.get('/', tweedsController.seeAllTweeds);
  app.get('/new', tweedsController.newTweed);
  app.post('/tweeds', tweedsController.postTweed);

//routes for users
  app.post('/checkUser', usersController.userCheck)

};