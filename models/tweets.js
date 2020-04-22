/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope

    let getAll = (callback) => {

        let query = 'SELECT * FROM tweets ORDER BY created_at DESC';

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

    let getTweetsFromFollowing = (currentUserId, callback) => {

        let query = `SELECT tweets.tweet_id, tweets.body, users.handle, users.dp_url, users.display_name, tweets.created_at, tweets.updated_at FROM tweets INNER JOIN users_followers ON users_followers.leader_id = tweets.tweeted_by INNER JOIN users ON users_followers.leader_id = users.user_id WHERE follower_id = ${currentUserId} ORDER BY created_at DESC`
        dbPoolInstance.query(query, (err, result) => {
            callback(err, result.rows)
        });
    }

    let createTweet = (body, userId, callback) => {
        let values = [body, userId];

        let query = `INSERT INTO tweets (body, tweeted_by) VALUES ($1, $2) RETURNING *`;

        dbPoolInstance.query(query, values, (err, result) => {
            callback(err, result.rows[0]);
        });
    };

    return {
        getAll: getAll,
        getTweetsFromFollowing: getTweetsFromFollowing,
        createTweet: createTweet
    };


};