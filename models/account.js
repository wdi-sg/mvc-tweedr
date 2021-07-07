/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

	// `dbPoolInstance` is accessible within this function scope

	let checkAccount = (username, callback) => {

		let query = 'SELECT username FROM Account WHERE LOWER(username) = $1';
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
	let addAccount = (username,password, callback) => {

		let query = 'INSERT INTO Account(username,password) VALUES($1,$2) RETURNING username';
		let values = [username,password];
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

	let loginAccount = (username,password, callback) => {

		let query = 'SELECT username FROM Account WHERE LOWER(username) = $1 AND password = $2';
		let values = [username.toLowerCase(), password];
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

	let getFollowers = (username, callback) => {
		let query = 'SELECT follower FROM Follower WHERE LOWER(username) = $1';
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
		let query = 'SELECT Follower FROM Follower WHERE LOWER(username) = $1 AND  LOWER(follower) = $2';
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
		checkAccount,
		addAccount,
		loginAccount,
		getFollowers,
		checkFollowing,
		addFollower,
		removeFollower
	};
};
