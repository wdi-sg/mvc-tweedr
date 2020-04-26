module.exports = (app, allModels) => {

//  ALL ROUTES FOR POKEMON CONTROLLER

  // require the controller
   const userControl = require('./controllers/users')(allModels);
   const tweetControl = require('./controllers/tweets')(allModels);
   const hashControl = require('./controllers/hashtags')(allModels);
   const favoriteControl = require('./controllers/favorites')(allModels);

  // users
   app.get('/register', userControl.registerUser);
   app.post('/register', userControl.registerAccount);
   app.get('/login', userControl.loginPage);
   app.post('/login', userControl.loginUser);
   //app.get('/logout', userControl.logoutUser);

   // tweets
   app.get('/new', tweetControl.newTweets);
   app.post('/new', tweetControl.addTweets);
   app.get('/', tweetControl.allTweets);
  //

  //hashtags
  app.get('/create',hashControl.newHashtags);
  app.post('/create',hashControl.addHashtags);
  app.get('/show', hashControl.allHashtags);

  //favorites
  app.get('/favorite/new',favoriteControl.newFavorites);
  app.post('/favorite',favoriteControl.addFavorites);
};