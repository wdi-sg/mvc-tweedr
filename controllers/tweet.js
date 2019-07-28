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

	let addTweetControllerCallback = (req, res) => {
		let username = req.cookies["username"];
		let content = req.body.content;
		db.tweet.addTweet(content, username,(error, callback) => {
			if (callback) {
				res.redirect('/');
			}
			else {
				res.redirect('/?err=tweet');
			}
		});
	};

	let showEditTweetControllerCallback = (req, res) => {
		let username = req.params.username;
		let tweetId = req.params.tweetId;
		if (username === req.cookies["username"]) {
			db.tweet.getTweet(username, tweetId, (error, tweet) => {
				if (tweet) {
					res.render('./tweet/profile-edit-tweet', {tweet, username});
				}
				else {
					res.send("Please try again as the server is having issues.");
				}
			});
		}
		else {
			res.send("You are not authorised to delete this tweet.");
		}
	};

	let editTweetControllerCallback = (req, res) => {
		let username = req.params.username;
		let content = req.body.content;
		let tweetId = req.params.tweetId;
		if (username === req.cookies["username"]) {
			db.tweet.editTweet(content, tweetId, (error, tweet) => {
				if (tweet) {
					res.redirect('/users/'+username);
				}
				else {
					res.send("Please try again as the server is having issues.");
				}
			});
		}
		else {
			res.send("You are not authorised to delete this tweet.");
		}
	};

	let deleteTweetControllerCallback = (req, res) => {
		let username = req.params.username;
		if (username === req.cookies["username"]) {
			let tweetId = req.params.tweetId;
			db.tweet.deleteTweet(username, tweetId, (error, callback) => {
				if (callback) {
					res.redirect('../../users/'+username);
				} else {
					res.send("Please try again as the server is having issues.");
				}
			});
		}
		else {
			res.send("You are not authorised to delete this tweet.");
		}
	};

	/**
	 * ===========================================
	 * Export controller functions as a module
	 * ===========================================
	 */
	return {
		getAll: getAllControllerCallback,
		addTweet: addTweetControllerCallback,
		showEditTweet: showEditTweetControllerCallback,
		editTweet: editTweetControllerCallback,
		deleteTweet: deleteTweetControllerCallback
	};

}
