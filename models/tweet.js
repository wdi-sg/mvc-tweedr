const helper = require('../helper');

module.exports = function(dbPoolInstance) {

    let getAllTweets = async function() {
        try {
            let sqlQuery = `SELECT t.users_username, t.content, t.created_at, u.img_url FROM tweets t
                            INNER JOIN users u ON (t.users_username = u.username)`;

            let result = await dbPoolInstance.query(sqlQuery);

            return result.rows;

        } catch(e) {
            console.log('tweet model ' + e);
        }
    };

    let getTweetsCountByUser = async function(username) {
        try {
            let values = [username];
            let sqlQuery = `SELECT COUNT(*) FROM tweets
                            WHERE users_username= $1`;

            let result = await dbPoolInstance.query(sqlQuery, values);

            return result.rows[0].count;

        } catch(e) {
            console.log('tweet model ' + e);
        }
    };

    let addNewTweet = async function(username, tweet) {
        try {
            let values = [username, tweet, helper.getCurrentDateAndTime()];
            let sqlQuery = `INSERT INTO tweets (users_username, content, created_at)
                            VALUES ($1, $2, $3)`;

            await dbPoolInstance.query(sqlQuery, values);

            return true;

        } catch(e) {
            console.log('tweet model ' + e);
        }
    };

    return {
        getAllTweets,
        addNewTweet,
        getTweetsCountByUser
    };
};