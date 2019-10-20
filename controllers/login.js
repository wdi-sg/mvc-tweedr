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
