/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

	// `dbPoolInstance` is accessible within this function scope

	let getFollower = (username, callback) => {
		let query = 'SELECT * FROM Follower WHERE LOWER(username) = $1';
		let values = [username.toLowerCase()];
		dbPoolInstance.query(query, values, (error, queryResult) => {
			if (error) {
				callback(error, null);
			} else {
				if (queryResult.rows.length > 0) {
					callback(null, queryResult.rows);
				} else {
					callback(null, null);
				}
			}
		});
	};
	let getFollowing = (username, callback) => {
		let query = 'SELECT * FROM Follower WHERE LOWER(follower) = $1';
		let values = [username.toLowerCase()];
		dbPoolInstance.query(query, values, (error, queryResult) => {
			if (error) {
				callback(error, null);
			} else {
				if (queryResult.rows.length > 0) {
					callback(null, queryResult.rows);
				} else {
					callback(null, null);
				}
			}
		});
	};
	let checkFollowing = (username, loggedInUser, callback) => {
		let query = 'SELECT * FROM Follower WHERE LOWER(username) = $1 AND  LOWER(follower) = $2';
		let values = [username.toLowerCase(), loggedInUser.toLowerCase()];
		dbPoolInstance.query(query, values, (error, queryResult) => {
			if (error) {
				callback(error, null);
			} else {
				if (queryResult.rows.length > 0) {
					callback(null, queryResult.rows);
				} else {
					callback(null, null);
				}
			}
		});
	};

	let addFollower = (username, follower, callback) => {
		let query = 'INSERT INTO Follower(username, follower) VALUES ($1,$2) RETURNING username';
		let values = [username,follower];
		dbPoolInstance.query(query, values, (error, queryResult) => {
			if (error) {
				callback(error, null);
			} else {
				if (queryResult.rows.length > 0) {
					callback(null, queryResult.rows);
				} else {
					callback(null, null);
				}
			}
		});
	};
	let removeFollower = (username, follower, callback) => {
		let query = 'DELETE FROM Follower WHERE username = $1 AND follower = $2 RETURNING follower';
		let values = [username,follower];
		dbPoolInstance.query(query, values, (error, queryResult) => {
			if (error) {
				callback(error, null);
			} else {
				if (queryResult.rows.length > 0) {
					callback(null, queryResult.rows);
				} else {
					callback(null, null);
				}
			}
		});
	};
	return {
		getFollower,
		checkFollowing,
		getFollowing,
		addFollower,
		removeFollower
	};
};
