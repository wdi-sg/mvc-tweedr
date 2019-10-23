
// ------------------ WHAT DOES models/x.js DO? ------------------
// 0 - Gets called by db.js
// 1 - Write your functions for selecting the appropriate data
// 2 - Stores your function as an object (to be used later)
// 3 - Export it back to db.js



/* ===================================================
 * =========         3. Export            ============
=================================================== */

module.exports = (dbPoolInstance) => {

    /* ===================================================
     * ========         1. FUNCTION            ===========
    =================================================== */
    //Declare your function here. You really only need to customize the query.
    let getAllUsers = (callback) => {
        let query = 'SELECT * FROM users';
        dbPoolInstance.query(query, (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        });
    };

    let getNameUsers = (userId, callback) => {
        let queryArr = [userId]
        let query = 'SELECT username FROM users WHERE id = $1';
        dbPoolInstance.query(query, queryArr, (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        });
    };

    let getTweedUsers = (userId, callback) => {
        let queryArr = [userId]
        let query = 'SELECT * FROM tweeds WHERE user_id = $1';
        dbPoolInstance.query(query, queryArr, (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        });
    };

    let getSpecificTweedUsers = (userId, tweedId, callback) => {
        let queryArr = [userId, tweedId]
        let query = 'SELECT * FROM tweeds WHERE user_id = $1 AND id = $2';
        dbPoolInstance.query(query, queryArr, (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        });
    };

    let getFollowing = (userId, callback) => {
        let queryArr = [userId]
        let query = 'SELECT users.username, tweeds.content FROM tweeds INNER JOIN following ON (following.following_id = tweeds.user_id) INNER JOIN users ON (users.id = tweeds.user_id) WHERE (following.user_id = $1)';
        dbPoolInstance.query(query, queryArr, (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        });
    };

    let postTweed = (userId, tweed, callback) => {
        let queryArr = [userId, tweed];
        let query = 'INSERT INTO tweeds (user_id, content) VALUES ($1,$2)';
        dbPoolInstance.query(query, queryArr, (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        });
    };

    let checkLogin = (username, password, callback) =>{
        let queryArr = [username,password];
        let query = 'SELECT * FROM users WHERE username = $1 AND hashpassword = $2';
        dbPoolInstance.query(query,queryArr,(error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        });
    }

    let checkUserExists = (username , callback) =>{
        let queryArr = [username];
        let query = 'SELECT * FROM users WHERE username = $1';
        dbPoolInstance.query(query, queryArr,(error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        });
    }

    let registerUser = (username, hashPassword, callback) => {
        let queryArr = [username, hashPassword];
        let query = 'INSERT INTO users (username, hashPassword) VALUES ($1,$2) RETURNING *';
        dbPoolInstance.query(query, queryArr, (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        });
    };

    let follow = (user_id, id, callback) => {
        let queryArr = [user_id, id];
        let query = 'INSERT INTO following (user_id, following_id) VALUES ($1,$2)';
        dbPoolInstance.query(query, queryArr, (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        });
    };

    let unfollow = (user_id, id, callback) => {
        let queryArr = [user_id, id];
        let query = 'DELETE FROM following WHERE user_id = $1 AND following_id = $2';
        dbPoolInstance.query(query, queryArr, (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        });
    };

    let checkFollow = (user_id, id, callback) => {
        let queryArr = [user_id, id];
        let query = 'SELECT * FROM following WHERE user_id = $1 AND following_id = $2';
        dbPoolInstance.query(query, queryArr, (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        });
    };

    let checkFollowing = (user_id, callback) => {
        let queryArr = [user_id];
        let query = 'SELECT * FROM following INNER JOIN users ON (users.id = following.following_id) WHERE following.user_id = $1';
        dbPoolInstance.query(query, queryArr, (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        });
    };

    let editTweed = (content, tweed_id,callback) => {
        let queryArr = [content,tweed_id];
        let query = 'UPDATE tweeds SET content = $1 WHERE id = $2';
        dbPoolInstance.query(query, queryArr, (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        });
    };

    let deleteTweed = (tweed_id,callback) => {
        let queryArr = [tweed_id];
        let query = 'DELETE FROM tweeds WHERE id = $1';
        dbPoolInstance.query(query, queryArr, (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        });
    };




    /* ===================================================
     * =====          2. RETURN FUNCTION          ========
    =================================================== */
    //List of functions available
    return {
        getAllUsers,
        getNameUsers,
        getTweedUsers,
        getSpecificTweedUsers,
        getFollowing,
        postTweed,
        checkLogin,
        checkUserExists,
        registerUser,
        follow,
        unfollow,
        checkFollow,
        checkFollowing,
        editTweed,
        deleteTweed,
    };
};