module.exports = (app, allModels) => {


  // require controllers
  const usersController = require('./controllers/users')(allModels);
  const tweedsController = require('./controllers/tweeds')(allModels);

//routes for tweeds
  app.get('/', tweedsController.seeAllTweeds);

//routes for users
  app.post('/checkUser', usersController.userCheck)

};