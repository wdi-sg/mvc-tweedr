/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

	// `dbPoolInstance` is accessible within this function scope

	let checkAccount = (username, callback) => {

		let query = 'SELECT * FROM Account WHERE LOWER(username) = $1';
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

		let query = 'SELECT * FROM Account WHERE LOWER(username) = $1 AND password = $2';
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

	return {
		checkAccount,
		addAccount,
		loginAccount
	};
};
