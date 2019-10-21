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
	const registerControllerCallback = require('./controllers/register')(allModels);
	const loginControllerCallback = require('./controllers/login')(allModels);
	const userTweetsControllerCallback = require('./controllers/usertweets')(allModels);

	// get all tweets
	// register home page, plus show successful registration details
	app.get('/register/user', registerControllerCallback.getAllDetails);
	app.post('/register', registerControllerCallback.registerUser);

	// login page
	app.get('/login/user', loginControllerCallback.renderLoginForm);
	app.post('/login', loginControllerCallback.userLoggingIn);

	// enable user to create new tweets
	app.post('/tweets/new', userTweetsControllerCallback.renderNewTweet);
	// when user logs in, can see all current tweets. if no tweets, ask user to compose a tweet.
	app.get('/tweets/:username', userTweetsControllerCallback.renderDashboard);
	app.post('/tweets/new/created', userTweetsControllerCallback.addNewTweet);
};
