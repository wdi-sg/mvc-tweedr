/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope

    let getAll = (callback) => {

        let query = 'SELECT * FROM tweets';

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

    let addNew = (tweetInfo, callback) => {

        let query = 'INSERT INTO tweets (user_id, content) VALUES ($1, $2) RETURNING *';
        console.log("tweetInfo", tweetInfo)
        let tweetArr = [tweetInfo[0], tweetInfo[1]];
        if (tweetInfo) {

            dbPoolInstance.query(query, tweetArr, (error, queryResult) => {
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
        } else {
            console.log('error, nothing in tweet array')
        }
    }

    return {
        getAll,
        addNew,

    };
};