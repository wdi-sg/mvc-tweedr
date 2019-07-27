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
	let addNew = (content, username, callback) => {

		let query = 'INSERT INTO Tweet(content, username) VALUES($1,$2) RETURNING username';
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

	return {
		getAll,
		addNew
	};
};
