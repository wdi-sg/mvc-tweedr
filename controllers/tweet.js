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
				res.render('tweet/dashboard', {allTweets, username, error:queryErr});
			}
			else {
				res.render('tweet/index', {allTweets, error:queryErr});
			}
		});
	};
	let addNewControllerCallback = (req, res) => {
		let username = req.cookies["username"];
		let content = req.body.content;
		db.tweet.addNew(content, username,(error, callback) => {
			if (callback) {
				res.redirect('/');
			}
			else {
				res.redirect('/?err=tweet');
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
		addNew: addNewControllerCallback
	};

}
