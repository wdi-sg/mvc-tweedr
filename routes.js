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
	const tweetsControllerCallbacks = require('./controllers/tweets')(allModels);
	const registerControllerCallback = require('./controllers/register')(allModels);
	const loginControllerCallback = require('./controllers/login')(allModels);

	// get all tweets
	app.get('/', tweetsControllerCallbacks.getAllTweets);
	// register home page, plus show successful registration details
	app.get('/register/user', registerControllerCallback.getAllDetails);
	app.post('/register', registerControllerCallback.registerUser);

	// login page
	app.get('/login/user', loginControllerCallback.renderLoginForm);
	app.post('/login', loginControllerCallback.userLoggingIn);
};
