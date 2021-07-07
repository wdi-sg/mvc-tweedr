module.exports = (db) => {

	/**
	 * ===========================================
	 * Controller logic
	 * ===========================================
	 */

	let addFollowerControllerCallback = (req, res) => {
		let username = req.params.username;
		let loggedInUser = req.cookies["username"];
		db.account.checkFollowing(username, loggedInUser, (error, following) => {
			if (following) {
				db.account.removeFollower(username,loggedInUser,(error, following) => {
					if (following) {
						res.redirect('../users/'+username);
					}
					else {
						res.send("Please try again as the server is having issues.");
					}
				});
			}
			else {
				db.account.addFollower(username,loggedInUser,(error, following) => {
					if (following) {
						res.redirect('../users/'+username);
					}
					else {
						res.send("Please try again as the server is having issues.");
					}
				});
			}
		});
	};

	let getFollowingControllerCallback = (req, res) => {
		let username = req.params.username;
		let loggedInUser = req.cookies["username"];
		db.follower.getFollowing(username,(error, following) => {
			res.render('tweet/following',{following, username,loggedInUser});
		});
	};

	let getFollowerControllerCallback = (req, res) => {
		let username = req.params.username;
		let loggedInUser = req.cookies["username"];
		db.follower.getFollower(username,(error, follower) => {
			res.render('tweet/follower',{follower, username, loggedInUser});
		});
	};

	/**
	 * ===========================================
	 * Export controller functions as a module
	 * ===========================================
	 */
	return {
		addFollower: addFollowerControllerCallback,
		getFollowing: getFollowingControllerCallback,
		getFollower: getFollowerControllerCallback,
	};

};
