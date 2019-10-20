/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope

    let registerNew = (userInfo, callback) => {

        let query = 'INSERT INTO users (username, password) VALUES ($1, $2)';

        const newUserArr = [userInfo.username, userInfo.password]
        dbPoolInstance.query(query, newUserArr, (error, queryResult) => {
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
        registerNew,
    };
};