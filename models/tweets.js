/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
    // `dbPoolInstance` is accessible within this function scope
    let newTweet = (data, callback) => {
        const tweetObj = data;
        // Insert data into DB..
        let query = `INSERT INTO tweets
        (tweets, user_id)
        VALUES
        ("${tweetObj.tweets}", ${tweetObj[`user_id`]})
        RETURNING *`;
        // console.log(`**************************************`);
        // console.log(`This is the query: ${query}`);
        // console.log(`**************************************`);
        dbPoolInstance.query(query, (error, queryResult) => {
            if (error) {
                // invoke callback function with error after query has executed
                console.log(error);
                callback(error, null);
            } else {
                // invoke callback function with results after query has executed
                if (queryResult.rows.length > 0) {
                    // returns [{}]?
                    callback(null, queryResult.rows[0]);
                } else {
                    callback(null, null);
                }
            }
        });
    },

    return {
        newTweet
    };
};