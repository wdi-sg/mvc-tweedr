/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope

    let loggingIn = (loginInfo, callback) => {

        let {
            username,
            reqPassword
        } = loginInfo;

        let query = `SELECT * FROM users WHERE username = '${username}'`;

        dbPoolInstance.query(query, (error, queryResult) => {
            if (error) {

                // invoke callback function with results after query has executed
                callback(error, null);

            } else {

                // invoke callback function with results after query has executed

                if (queryResult.rows.length > 0 && queryResult.rows[0].password === reqPassword) {
                    console.log("yay logging in", response.rows)
                    callback(null, queryResult.rows);

                } else {
                    // if username is not found 
                    callback(null, null);
                    console.log('invalid username!')

                }
            }
        });
    };

    return {
        loggingIn,
    };
};