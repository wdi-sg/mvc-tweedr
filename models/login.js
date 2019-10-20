/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope

    let loggingIn = (loginInfo, callback) => {

        let query = 'INSERT INTO users (username, password) VALUES ($1, $2)';

        const loginInfoArr = [loginInfo.username, loginInfo.password]
        dbPoolInstance.query(query, loginInfoArr, (error, queryResult) => {
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
        loggingIn,
    };
};