/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

	// `dbPoolInstance` is accessible within this function scope

	let getAll = (callback) => {

		let query = 'SELECT * FROM Tweet ORDER BY Tweet.date_created DESC';

		dbPoolInstance.query(query, (error, queryResult) => {
			if (error) {

				// invoke callback function with results after query has executed
				callback(error, null);

			} else {

				// invoke callback function with results after query has executed

				if (queryResult.rows.length > 0) {
					callback(null, queryResult.rows);

				} else {
					callback(null, null);

				}
			}
		});
	};
	let getTweet = (username, tweetId, callback) => {

		let query = 'SELECT * FROM Tweet WHERE id = $1 AND LOWER(username) = $2';
		let values = [tweetId, username.toLowerCase()];
		dbPoolInstance.query(query,values, (error, queryResult) => {
			if (error) {

				// invoke callback function with results after query has executed
				callback(error, null);

			} else {

				// invoke callback function with results after query has executed

				if (queryResult.rows.length > 0) {
					callback(null, queryResult.rows);

				} else {
					callback(null, null);

				}
			}
		});
	};
	let addTweet = (content, username, callback) => {

		let query = 'INSERT INTO Tweet(content, username, date_created) VALUES($1,$2,NOW()) RETURNING username';
		let values = [content,username];
		dbPoolInstance.query(query, values, (error, queryResult) => {
			if (error) {

				// invoke callback function with results after query has executed
				callback(error, null);

			} else {

				// invoke callback function with results after query has executed

				if (queryResult.rows.length > 0) {
					callback(null, queryResult.rows);

				} else {
					callback(null, null);

				}
			}
		});
	};

	let getUserTweet = (username, callback) => {

		let query = 'SELECT * FROM Tweet WHERE LOWER(username) = $1 ORDER BY Tweet.date_created DESC';
		let values = [username.toLowerCase()];
		dbPoolInstance.query(query, values, (error, queryResult) => {
			if (error) {

				// invoke callback function with results after query has executed
				callback(error, null);

			} else {

				// invoke callback function with results after query has executed

				if (queryResult.rows.length > 0) {
					callback(null, queryResult.rows);

				} else {
					callback(null, null);

				}
			}
		});
	};

	let getFollowingTweet = (username,callback) => {
		let query = 'SELECT Tweet.username, Tweet,content, Tweet.date_created FROM Tweet INNER JOIN Follower ON (Tweet.username = Follower.username) WHERE Follower.follower = $1 ORDER BY Tweet.date_created DESC';
		let values = [username];
		dbPoolInstance.query(query, values, (error, queryResult) => {
			if (error) {

				// invoke callback function with results after query has executed
				callback(error, null);

			} else {

				// invoke callback function with results after query has executed

				if (queryResult.rows.length > 0) {
					callback(null, queryResult.rows);

				} else {
					callback(null, null);

				}
			}
		});
	};

	let getFollowerTweet = (username,callback) => {
		let query = 'SELECT Tweet.username, Tweet,content, Tweet.date_created FROM Tweet INNER JOIN Follower ON (Tweet.username = Follower.follower) WHERE Follower.username = $1 ORDER BY Tweet.date_created DESC';
		let values = [username];
		dbPoolInstance.query(query, values, (error, queryResult) => {
			if (error) {

				// invoke callback function with results after query has executed
				callback(error, null);

			} else {

				// invoke callback function with results after query has executed

				if (queryResult.rows.length > 0) {
					callback(null, queryResult.rows);

				} else {
					callback(null, null);

				}
			}
		});
	};

	let editTweet = (content, tweetId, callback) => {

		let query = 'UPDATE Tweet SET content = $1 WHERE id = $2 RETURNING id';
		let values = [content, tweetId];
		dbPoolInstance.query(query, values, (error, queryResult) => {
			if (error) {

				// invoke callback function with results after query has executed
				callback(error, null);

			} else {

				// invoke callback function with results after query has executed

				if (queryResult.rows.length > 0) {
					callback(null, queryResult.rows);

				} else {
					callback(null, null);

				}
			}
		});
	};

	let deleteTweet = (username, userId, callback) => {

		let query = 'DELETE FROM Tweet WHERE LOWER(username) = $1 AND id = $2 RETURNING id';
		let values = [username.toLowerCase(), userId];
		dbPoolInstance.query(query, values, (error, queryResult) => {
			if (error) {

				// invoke callback function with results after query has executed
				callback(error, null);

			} else {

				// invoke callback function with results after query has executed

				if (queryResult.rows.length > 0) {
					callback(null, queryResult.rows);

				} else {
					callback(null, null);

				}
			}
		});
	};

	return {
		getAll,
		getTweet,
		addTweet,
		getUserTweet,
		getFollowingTweet,
		getFollowerTweet,
		editTweet,
		deleteTweet
	};
};
