module.exports = (db) => {

	/**
	 * ===========================================
	 * Controller logic
	 * ===========================================
	 */

	let getAllControllerCallback = (req, res) => {
		let queryErr = req.query.err;
		db.tweet.getAll((error, allTweets) => {
			let loginSession = req.cookies["logged_in"];
			if (loginSession){
				let username = req.cookies["username"];
				res.render('tweet/dashboard', {allTweets, username});
			}
			else {
				res.render('tweet/index', {allTweets, error:queryErr});
			}
		});
	};


	/**
	 * ===========================================
	 * Export controller functions as a module
	 * ===========================================
	 */
	return {
		getAll: getAllControllerCallback,
	};

}
