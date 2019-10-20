const sha256 = require('js-sha256');

module.exports = (dbPoolInstance) => {
	// `dbPoolInstance` is accessible within this function scope

	let userLoggingIn = (callback, userLoginInfo) => {
		let hashedLoginPassword = sha256(userLoginInfo.password);
		const loginUsername = [ userLoginInfo.username ];
		let unhashedPassword = userLoginInfo.password;

		const query = `SELECT * FROM users WHERE users.username = '${loginUsername}'`;

		dbPoolInstance.query(query, (error, queryResult) => {
			if (error) {
				// invoke callback function with results after query has executed
				callback(error, null);
			} else {
				// if there is a matching username AND hashed login password is same as hashed registered password
				if (queryResult.rows.length > 0 && queryResult.rows[0].hashedpassword === hashedLoginPassword) {
					console.log('queryResult is', queryResult.rows);
					callback(null, queryResult.rows);
				} else {
					callback(null, null);
					console.log('password not found in database');
					console.log(queryResult.rows);
				}
			}
		});
	};

	return {
		userLoggingIn
	};
};
