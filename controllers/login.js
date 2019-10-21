const sha256 = require('js-sha256');
const SALT = 'SEI20 FTW';

module.exports = (db) => {
	/**
   * ===========================================
   * Controller logic
   * ===========================================
   */

	let renderLoginForm = (request, response) => {
		console.log('hello login controller');
		response.render('tweets/loginform');
	};

	// storing login details
	let userLoggingIn = (request, response) => {
		const userLoginInfo = request.body;

		const processingLoginInfo = (error, loggedInUser) => {
			if (error) {
				console.log('SOMETHING IS WRONG WITH LOGIN');
				console.log(error);
			} else {
				// successful login
				if (loggedInUser) {
					// hashing username, and giving it a cookie
					let loginCookie = sha256(userLoginInfo.username + 'logged' + SALT);
					response.cookie('logged_in', loginCookie);
					// unhashed username, for reference
					response.cookie('username', userLoginInfo.username);
					// console.log('WHAT IS THIS', loggedInUser[0].id);
					// // give cookie to user id
					response.cookie('users_id', loggedInUser[0].id);
					response.render('tweets/loginsuccess', { loggedInUser });
				} else {
					// login failed
					response.render('tweets/loginfailure');
				}
			}
		};
		// inserting into db, db needs to have a user....
		db.userLogin.userLoggingIn(processingLoginInfo, userLoginInfo);
	};

	/**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
	return {
		renderLoginForm,
		userLoggingIn
	};
};
