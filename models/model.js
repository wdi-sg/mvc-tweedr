// ===========================================
//   Export model functions as a module
// ===========================================

module.exports = (dbPoolInstance) => {
    // `dbPoolInstance` is accessible within this function scope

    // ==== Get all users ====
    let getAllUsers = (callback) => {
        let usersQuery = 'SELECT * FROM users';

        dbPoolInstance.query(usersQuery, (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                if (result.rows.length > 0) {
                    callback(null, result.rows);
                } else {
                    callback(null, null);
                }
            }
        });
    }

    // ==== Insert Tweet into Tweets Table ====
    let insertTweet = (tweet, userId, callback) => {
        let values = [tweet, userId]
        let query = 'INSERT INTO tweets (tweet, user_id) VALUES ($1, $2) RETURNING *';
        console.log('values:', values);

        dbPoolInstance.query(query, values, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                callback(err, result.rows[0])
            }
        });
    }

    // ==== Get all Tweets =====
    let getAllTweets = (callback) => {
        let query = 'SELECT tweets.id, tweets.tweet, users.username FROM tweets INNER JOIN users ON (tweets.user_id = users.id)';

        dbPoolInstance.query(query, (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                if (result.rows.length > 0) {
                    callback(null, result.rows);
                } else {
                    callback(null, null);
                }
            }
        });
    }

    return {
        getAllUsers,
        insertTweet,
        getAllTweets
    };
};