/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
const SALT = "PUTANG INA MO";
var sha256 = require('js-sha256');
module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope

    let getAll = (user_id,callback) => {

        let query = 'SELECT users.id,users.name,tweets.content,tweets.create_at,tweets.user_id FROM users INNER JOIN tweets ON (tweets.user_id = users.id) WHERE users.id IN (SELECT user_id FROM followers WHERE follower_id=$1 UNION SELECT follower_id FROM followers WHERE user_id=$1 UNION SELECT id FROM users WHERE id=$1) ORDER BY tweets.create_at DESC';

        let arr = [user_id]

        dbPoolInstance.query(query,arr, (error, queryResult) => {
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
                    console.log(sha256(form.password));
                    if (queryResult.rows[0].password === sha256(form.password)) {
                        console.log("ok")
                        console.log(queryResult.rows)
                        callback(null, queryResult.rows);
                    } else {
                        console.log("ham")
                        callback(null, null);

                    }
                } else {
                    console.log("ham2")
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

    let getSingleUser = (user_id, callback) => {
        let query = 'SELECT * FROM users WHERE id =' + user_id;
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

    let getFollower = (user_id, callback) => {

        let query = `SELECT * FROM users WHERE id IN (SELECT follower_id FROM followers WHERE user_id=${user_id})`
        dbPoolInstance.query(query, (error, queryResult) => {
            if (error) {
                callback(error, null);
                console.log("gg")
            } else {
                if (queryResult.rows.length > 0) {
                    console.log(queryResult.rows)
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);

                }
            }
        });
    }

    let checkIfFollowed = (profile_user_id, login_user_id, callback) => {
        if (parseInt(profile_user_id) === parseInt(login_user_id)) {
            callback(null, true);
        } else {
            let query = `SELECT EXISTS(SELECT * FROM followers WHERE follower_id = ${login_user_id} AND user_id = ${profile_user_id})`
            dbPoolInstance.query(query, (error, queryResult) => {
                if (error) {
                    callback(error, null);
                    console.log("gg")
                } else {
                    if (queryResult.rows[0].exists) {
                        callback(null, true);
                    } else {
                        callback(null, null);

                    }
                }
            });
        }

    }

    let follow = (profile_user_id, login_user_id, callback) => {
        let query = `INSERT INTO followers (user_id,follower_id) VALUES ($1,$2) RETURNING *`
        let arr = [profile_user_id, login_user_id];
        dbPoolInstance.query(query, arr, (error, queryResult) => {
            if (error) {
                callback(error, null);
                console.log("gg")
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, true);
                } else {
                    callback(null, null);

                }
            }
        });
    }

    let getFollowing = (user_id, callback) => {
        let query = `SELECT * FROM users WHERE id IN (SELECT user_id FROM followers WHERE follower_id = ${user_id})`
        dbPoolInstance.query(query, (error, queryResult) => {
            if (error) {
                callback(error, null);
                console.log("gg")
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);

                }
            }
        });
    }

    let countFollower = (profile_id, callback) => {
        let query = `SELECT COUNT(follower_id) FROM followers WHERE user_id = $1`
        let arr = [profile_id];
        dbPoolInstance.query(query, arr,(error, queryResult) => {
            if (error) {
                callback(error, null);
                console.log("gg")
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows[0].count);
                } else {
                    callback(null, null);

                }
            }
        });
    }

    let countFollowing = (profile_id, callback) => {
        let query = `SELECT COUNT(user_id) FROM followers WHERE follower_id = $1`
        let arr = [profile_id];
        dbPoolInstance.query(query, arr,(error, queryResult) => {
            if (error) {
                callback(error, null);
                console.log("gg")
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows[0].count);
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
        getSingleUser,
        getFollower,
        checkIfFollowed,
        follow,
        getFollowing,
        countFollower,
        countFollowing
    };
};