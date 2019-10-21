const sha256 = require('js-sha256');

module.exports = (dbPoolInstance) => {
	// `dbPoolInstance` is accessible within this function scope

	let getAll = (userUrl, callback) => {
		// find tweets from user!!! USE INNER JOIN
		console.log('userURL is', userUrl);

		const query = `SELECT tweets.username, tweets.tweets FROM tweets INNER JOIN users on (tweets.users_id = users.id)`;

		dbPoolInstance.query(query, (error, queryResult) => {
			if (error) {
				// invoke callback function with results after query has executed
				callback(error, null);
				console.log(error);
			} else {
				// if there is a matching username AND hashed login password is same as hashed registered password
				if (queryResult.rows.length > 0 && queryResult.rows[0].username === userUrl) {
					console.log('user tweets found!!');
					console.log('queryResult user', queryResult.rows[0].username);
					console.log(userUrl);
					callback(null, queryResult.rows);
				} else {
					callback(null, null);
					console.log('user has no tweets');
					console.log(queryResult.rows[0].username);
				}
			}
		});
	};

	let tweeting = (user_id, tweetDetails, usernameCookie, callback) => {
		let tweetComponents = [ user_id, usernameCookie, tweetDetails.tweet ];
		let query = `INSERT INTO tweets (users_id, username, tweets) VALUES ($1, $2, $3) RETURNING *`;
		dbPoolInstance.query(query, tweetComponents, (error, queryResult) => {
			if (error) {
				callback(error, null);
				console.log(error);
			} else {
				if (queryResult.rows.length > 0) {
					callback(null, queryResult.rows);
					console.log('tweet successfuly added!!');
				} else {
					callback(null, null);
				}
			}
		});
	};

	return {
		getAll,
		tweeting
	};
};
