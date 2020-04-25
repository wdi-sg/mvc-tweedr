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
        let query = 'INSERT INTO tweets (tweet, user_id) VALUES ($1, $2)';

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
        let query = 'SELECT tweets.id, tweets.tweet, tweet_hashtag.hashtag_id, hashtags.hashtag, tweets.user_id, users.username FROM tweets INNER JOIN users ON (tweets.user_id = users.id) INNER JOIN tweet_hashtag ON (tweets.id = tweet_hashtag.tweet_id) INNER JOIN hashtags ON (tweet_hashtag.hashtag_id = hashtags.id)';

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

    // ==== Get all user's Tweets =====
    let getUserTweets = (userId, callback) => {
        let query = 'SELECT tweets.user_id, tweets.tweet, users.username FROM tweets INNER JOIN users ON (tweets.user_id = users.id) WHERE tweets.user_id=' + userId;

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
        })
    }

    // ==== Insert followed user =====
    let insertFollowedUser = (userId, followedUserId, callback) => {
        let query = 'INSERT INTO user_followers (user_id, follower_id) VALUES ($1, $2)';
        let values = [userId, followedUserId];

        dbPoolInstance.query(query, values, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                callback(err, result.rows[0])
            }
        })
    }

    // ==== Check user and followers =====
    let getFollowedUsers = (userId, callback) => {
        let query = 'SELECT * FROM user_followers WHERE user_id=' + userId;

        dbPoolInstance.query(query, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                callback(err, result.rows)
            }
        })
    }

    let getAllHashtags = (callback) => {
        let query = 'SELECT * FROM hashtags';

        dbPoolInstance.query(query, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                callback(err, result.rows)
            }
        })
    }

    let insertHashtag = (hashtag, callback) => {
        let query = 'INSERT INTO hashtags (hashtag) VALUES ($1) RETURNING *';
        values = [hashtag];

        dbPoolInstance.query(query, values, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                callback(err, result.rows[0])
            }
        })
    }

    let getTweetsWithEachHashtag = (hashtagId, callback) => {
        let query = 'SELECT hashtags.id, hashtags.hashtag, tweet_hashtag.tweet_id, tweets.tweet, tweets.user_id, users.username FROM hashtags INNER JOIN tweet_hashtag ON (hashtags.id = tweet_hashtag.hashtag_id) INNER JOIN tweets ON (tweet_hashtag.tweet_id = tweets.id) INNER JOIN users ON (tweets.user_id = users.id) WHERE hashtags.id=' + hashtagId;

        dbPoolInstance.query(query, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                callback(err, result.rows)
            }
        })
    }

    return {
        getAllUsers,
        insertTweet,
        getAllTweets,
        getUserTweets,
        insertFollowedUser,
        getFollowedUsers,
        getAllHashtags,
        insertHashtag,
        getTweetsWithEachHashtag,
    };
};