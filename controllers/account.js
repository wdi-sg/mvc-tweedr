const sha256 = require('js-sha256');
const SALT = "sAlT aNd PePpEr";

module.exports = (db) => {

	/**
	 * ===========================================
	 * Controller logic
	 * ===========================================
	 */

	let registerControllerCallback = (req, res) => {
		let username = req.body.username;
		let password = sha256(req.body.password);
		db.account.checkAccount(username,(error, callback) => {
			if (callback) {
				res.redirect('/?err=register');
			}
			else {
				db.account.addAccount(username, password,(error, callback) => {
					if (callback) {
						res.cookie('logged_in', sha256(callback[0].username+"logged in"+SALT));
						res.cookie('username', callback[0].username);
						res.redirect('/');
					}
					else {
						res.redirect('/?err=server');
					}
				});
			}
		});
	};

	let logoutControllerCallback = (req, res) => {
		res.clearCookie('logged_in');
		res.clearCookie('username');
		res.redirect('/');
	};

	let loginControllerCallback = (req, res) => {
		let username = req.body.username;
		let password = sha256(req.body.password);
		db.account.checkAccount(username,(error, callback) => {
			if (callback) {
				db.account.loginAccount(username, password,(error, callback) => {
					if (callback) {
						res.cookie('logged_in', sha256(callback[0].username+"logged in"+SALT));
						res.cookie('username', callback[0].username);
						res.redirect('/');
					}
					else {
						res.redirect('/?err=login');
					}
				});
			}
			else {
				res.redirect('/?err=login')
			}
		});
	};

	let profileControllerCallback = (req, res) => {
		let username = req.params.username;
		db.account.checkAccount(username, (error, user) => {
			//check if there is such user
			if (user) {
				//get tweets from user
				db.tweet.getUserTweet(username, (error, tweets) => {
					//check if user have followed
					let loggedInUser = req.cookies["username"];
					db.account.checkFollowing(username, loggedInUser, (error, following) => {
						let follow = "follow";
						if (following) {
							follow = "followed";
						} else if (loggedInUser === username) {
							follow = "same user";
						} else if (!loggedInUser) {
							follow = "please log in";
						}
						res.render('tweet/profile', {tweets, username, loggedInUser, follow});
					});
				});
			}

			else{
				res.send("no such user.");
			}
		});
	};

	/**
	 * ===========================================
	 * Export controller functions as a module
	 * ===========================================
	 */
	return {
		register: registerControllerCallback,
		logout: logoutControllerCallback,
		login: loginControllerCallback,
		profile: profileControllerCallback
	};

};
