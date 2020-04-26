/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
    // `dbPoolInstance` is accessible within this function scope

    const addFave = (userId, tweetId, callback) => {

        const query = `INSERT INTO favourites(user_id, tweet_id) VALUES (${userId}, ${tweetId}) RETURNING *`;
        dbPoolInstance.query(query, (err, result) => {
            callback(err, result.rows[0])
        });
    };

    return {
        addFave: addFave
    };
};