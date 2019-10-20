const sha256 = require('js-sha256');
const SALT = 'SEI20 FTW';

module.exports = (db) => {
	/**
   * ===========================================
   * Controller logic
   * ===========================================
   */

	let renderDashboard = (request, response) => {
		let userUrl = request.params.username;
		console.log('userurl on dashboard page is', userUrl);
		console.log('hello rendering dashboard that shows all user tweets');
		db.tweets.getAll(userUrl, (error, allTweets) => {
			if (error) {
				console.log('EROROEROER', error);
			} else {
				response.render('tweets/usertweets', { allTweets });
				console.log('alltweets is', allTweets);
			}
		});
	};

	// enable user to create tweet
	let renderNewTweet = (request, response) => {
		console.log('rendering compose tweet form');
		response.render('tweets/newtweet');
	};
	// 	// inserting into db, db needs to have a user....
	// 	db.userLogin.userLoggingIn(processingLoginInfo, userLoginInfo);
	// };

	let addNewTweet = (request, response) => {
		let user_id = request.cookies.users_id;
		let usernameCookie = request.cookies.username;
		let tweetDetails = request.body;
		db.tweets.tweeting(user_id, tweetDetails, usernameCookie, (error, newTweet) => {
			if (error) {
				console.log('this is the error', error);
			} else {
				response.send('new tweet added, enter tweets/(your username) to see tweets');
				console.log('new tweet added!');
			}
		});
	};

	/**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
	return {
		renderDashboard,
		renderNewTweet,
		addNewTweet
	};
};
