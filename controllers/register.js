module.exports = (db) => {
	/**
   * ===========================================
   * Controller logic
   * ===========================================
   */

	let getAllDetails = (request, response) => {
		console.log('hello controller');
		response.render('tweets/register');
	};

	// storing registration details
	let registerUser = (request, response) => {
		const userRegistrationInfo = request.body;
		const renderRegistrationInfo = (error, registeredUser) => {
			response.render('tweets/registerSuccess', { registeredUser });
		};
		// inserting into db
		db.user.registerUser(renderRegistrationInfo, userRegistrationInfo);
	};

	/**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
	return {
		getAllDetails: getAllDetails,
		registerUser
	};
};
