/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope

    return {
        getAll: (callback) => {

            let query = 'SELECT users.id, users.screen_name, users.avatar, tweets.tweetmsg FROM users INNER JOIN tweets ON (tweets.userid = users.id) ORDER BY tweets.timestamp_col ASC';
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

        },

        addUser: (data, callback) => {
            let query = 'INSERT INTO users (screen_name, password, avatar) VALUES ($1, $2, $3) RETURNING *';
            let values = data;
            console.log("=============  addUser  ===============")
            console.log(data);
            dbPoolInstance.query(query, values, (error, queryResult) => {
                console.log("querying in progress.............................");
                if (error) {
                    console.log("error :" + error);
                    callback(error, null);
                } else {
                    if (queryResult.rows.length > 0) {
                        console.log("adduser query completed");
                        callback(null, queryResult.rows);
                    } else {
                        console.log("registration incomplete");
                        callback(null, null);
                    }
                }
            });
        },

        newTweet: (data, callback) => {
            let query = 'INSERT INTO tweets (userid, tweetmsg) VALUES ($1, $2)';
            let values = data;
            console.log("=============  newTweet  ===============")
            console.log(data);
            dbPoolInstance.query(query, values, (error, queryResult) => {
                console.log("new Tweet parsing in progress..........................");
                if (error) {
                    console.log("error :" + error);
                    callback(error, null);
                } else {
                    if (queryResult.rows.length > 0) {
                        console.log("newTweet query completed");
                        // console.log(queryResult.rows[0] );
                        callback(null, queryResult.rows);
                    } else {
                        console.log("newTweet failure");
                        callback(null, null);
                    }
                }
            });
        },

        checkLogin: (data, callback) => {
            let query = `SELECT * FROM users WHERE screen_name='${data[0]}'`;
            dbPoolInstance.query(query, (error, queryResult) => {
                console.log(queryResult.rows);
                if (error) {
                    console.log("error :" + error);
                    callback(error, null);
                } else {
                    console.log("return values :" + queryResult);
                    //console.dir(queryResult);
                    if (queryResult.rows.length > 0) {
                        callback(null, queryResult.rows);
                    } else {
                        callback(null, null);
                    }
                }
            });
        }


    };

};
