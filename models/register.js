module.exports = (dbPoolInstance) => {
	// `dbPoolInstance` is accessible within this function scope

	let registerUser = (callback, userRegistrationInfo) => {
		const collateUserInputDetails = [ userRegistrationInfo.email, userRegistrationInfo.username, userRegistrationInfo.password ];

		const query = `INSERT INTO users (email, username, password) VALUES($1, $2, $3) RETURNING *`;

		dbPoolInstance.query(query, collateUserInputDetails, (error, queryResult) => {
			if (error) {
				// invoke callback function with results after query has executed
				callback(error, null);
			} else {
				// invoke callback function with results after query has executed
				if (queryResult.rows.length > 0) {
					callback(null, queryResult.rows);
				} else {
					callback(null, null);
					console.log('registered user inside DATA BASESESE');
				}
			}
		});
	};

	return {
		registerUser
	};
};
