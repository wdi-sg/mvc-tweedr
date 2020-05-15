/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
    // `dbPoolInstance` is accessible within this function scope
    let newUser = (values, callback) => {
        // Insert data into DB..
        let query = 'INSERT INTO users (name, password) VALUES ($1, $2)';
        // console.log(`**********************************`);
        // console.log(`Inside users.js..`);
        // console.log(`values: ${values}`);
        // console.log(`**********************************`);
        // // Do I have access to request or even SALT here?
        // let hash = sha256(request.body.password + SALT);
        // const values = [request.body.name, hash];
        dbPoolInstance.query(query, values, (error, queryResult) => {
            if (error) {
                // invoke callback function with error after query has executed
                callback(error, null);
            } else {
                // invoke callback function with results after query has executed
                if (queryResult.rows.length > 0) {
                    // returns [{}]?
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        });
    };

    let idAndPasswordCheck = (query, hash, callback) => {
        // console.log(`Inside users.js`)
        // console.log(`query: ${query}`);
        // console.log(`************************************`);
        dbPoolInstance.query(query, (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                // if username is in our DB
                if (queryResult.rows.length >= 1) {
                    const user = queryResult.rows[0];
                    // console.log(`Inside users.js`)
                    // console.log(`hash: ${hash}`);
                    // console.log(`************************************`);
                    if (hash === user.password) {
                        // Password is CORRECT!
                        // Pass user info back to mastercontroller.js?
                        callback(null, user)
                    } else {
                        // Wrong Password
                        console.log(`WRONG`);
                        callback(null, null);
                    }
                } // else username not valid
                else {
                    callback(null, null);
                }
            }
        })
    };

    let newTweet = (data, callback) => {
        const tweetObj = data;
        // Insert data into DB..
        let query = `INSERT INTO tweets
        (tweet, user_id)
        VALUES
        ("${tweetObj.tweets}", ${tweetObj["user_id"]})
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
    }

    return {
        newUser,
        idAndPasswordCheck,
        newTweet
    };
};