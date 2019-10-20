const sha256 = require('js-sha256');

module.exports = (dbPoolInstance) => {
	// `dbPoolInstance` is accessible within this function scope

	let getAll = (callback) => {
		// find tweets from user!!! USE INNER JOIN

		const query = `SELECT tweets.username, tweets.tweets * FROM tweets INNER JOIN users on (tweets.users_id = users.id)`;

		dbPoolInstance.query(query, (error, queryResult) => {
			if (error) {
				// invoke callback function with results after query has executed
				callback(error, null);
			} else {
				// if there is a matching username AND hashed login password is same as hashed registered password
				if (queryResult.rows.length) {
					console.log('user tweets found!!');
					console.log('queryResult is', queryResult.rows);
					callback(null, queryResult.rows);
				} else {
					callback(null, null);
					console.log('user has no tweets');
					Response.render('user has no tweets bitch');
					console.log(queryResult.rows);
				}
			}
		});
	};

	return {
		getAll
	};
};
