/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
const SALT = "PUTANG INA MO";
var sha256 = require('js-sha256');
module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope

    let getAll = (callback) => {

        let query = 'SELECT users.name,tweets.content,users.id FROM users INNER JOIN tweets ON (users.id = tweets.user_id) ORDER BY tweets.id DESC';

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

    let registerUser = (form, callback) => {
        console.log(form.name);

        let query = `SELECT EXISTS (SELECT * FROM users WHERE name='${form.name}')`;

        dbPoolInstance.query(query, (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                console.log(queryResult.rows[0].exists);
                if (queryResult.rows[0].exists) {
                    callback(null, null);
                } else {
                    let query = 'INSERT INTO users (name,password) VALUES ($1,$2) RETURNING *'
                    let arr = [form.name, sha256(form.password)];

                    dbPoolInstance.query(query, arr, (error, queryResult) => {
                        if (error) {
                            callback(error, null);
                        } else {
                            if (queryResult.rows.length > 0) {
                                callback(null, true);
                            } else {
                                callback(null, null);
                            }
                        }
                    });
                }
            }
        });
    }


    let logInUser = (form, callback) => {

        let query = `SELECT * FROM users WHERE name ='${form.name}'`;

        dbPoolInstance.query(query, (error, queryResult) => {
            if (error) {

                // invoke callback function with results after query has executed
                callback(error, null);

            } else {

                // invoke callback function with results after query has executed

                if (queryResult.rows.length > 0) {
                    if (queryResult.rows[0].password === sha256(form.password)) {
                        callback(null, queryResult.rows);
                    } else {
                        callback(null, null);
                    }
                } else {
                    callback(null, null);

                }
            }
        });
    };

    let addTweet = (form, callback) => {
        let query = 'INSERT INTO tweets (content,user_id) VALUES ($1,$2) RETURNING *';
        let arr = [form.tweet, form.user_id];
        dbPoolInstance.query(query, arr, (error, queryResult) => {
            if (error) {

                // invoke callback function with results after query has executed
                callback(error, null);

            } else {

                // invoke callback function with results after query has executed

                if (queryResult.rows.length > 0) {
                    callback(null, true);
                } else {
                    callback(null, null);

                }
            }
        });

    }

    let getSingleUser = (user_id,callback) => {
        let query = 'SELECT * FROM users WHERE id ='+user_id;
        dbPoolInstance.query(query, (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows[0]);
                } else {
                    callback(null, null);

                }
            }
        });
    }

    return {
        getAll,
        registerUser,
        logInUser,
        addTweet,
        getSingleUser
    };
};