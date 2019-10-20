const sha256 = require('js-sha256');
const SALT = 'SEI20 FTW';

module.exports = (db) => {
	/**
   * ===========================================
   * Controller logic
   * ===========================================
   */

	let renderDashboard = (request, response) => {
		console.log('hello rendering dashboard that shows all user tweets');
		db.tweets.getAll((error, allTweets) => {
			response.render('tweets/usertweets', { allTweets });
		});
	};

	// storing login details
	// let userLoggingIn = (request, response) => {
	// 	const userLoginInfo = request.body;

	// 	const processingLoginInfo = (error, loggedInUser) => {
	// 		if (error) {
	// 			console.log('SOMETHING IS WRONG WITH LOGIN');
	// 			console.log(error);
	// 		} else {
	// 			// successful login
	// 			if (loggedInUser) {
	// 				// hashing username, and giving it a cookie
	// 				let loginCookie = sha256(loggedInUser.username + SALT);
	// 				response.cookie = ('logged_in', loginCookie);
	// 				// give cookie to user id
	// 				response.cookie = ('users_id', loggedInUser.id);
	// 				response.render('tweets/loginsuccess', { loggedInUser });
	// 			} else {
	// 				// login failed
	// 				response.render('tweets/loginfailure');
	// 			}
	// 		}
	// 	};
	// 	// inserting into db, db needs to have a user....
	// 	db.userLogin.userLoggingIn(processingLoginInfo, userLoginInfo);
	// };

	/**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
	return {
		renderDashboard
	};
};
