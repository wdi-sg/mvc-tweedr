
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
        let query = 'SELECT content FROM tweeds WHERE user_id = $1';
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

    /* ===================================================
     * =====          2. RETURN FUNCTION          ========
    =================================================== */
    //List of functions available
    return {
        getAllUsers,
        getNameUsers,
        getTweedUsers,
        getFollowing,
    };
};