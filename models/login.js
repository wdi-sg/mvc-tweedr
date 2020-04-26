const sha256 = require("js-sha256");

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
    // `dbPoolInstance` is accessible within this function scope

    const userLogin = (login, callback) => {
        let queryString =
            "SELECT * FROM users WHERE user_name = ($1) AND password = ($2)";

        let requestedHashedPassword = sha256(login.password);

        let values = [login.username, requestedHashedPassword];

        dbPoolInstance.query(queryString, values, (error, queryResult) => {
            if (error) {
                console.log("ERRRRROROROROROROR AT LOGIN QUERY");
                console.log(error);
                callback(error, null);
                return;
            }
            // invoke callback function with results after query has executed

            if (queryResult.rows.length > 0) {
                if (queryResult.rows[0].password === requestedHashedPassword) {
                    callback(null, queryResult.rows);
                }
            } else {
                console.log("Invalid username or password");
                callback(null, null);
            }
        });
    };

    const getName = (id, callback) => {
        const getQueryUser = "SELECT name FROM users WHERE id=" + id;

        dbPoolInstance.query(getQueryUser, (error, queryResult) => {
            if (error) {
                console.log("ERRRRROROROROROROR AT LOGIN QUERY");
                console.log(error);
                callback(error, null);
                return;
            }
            // invoke callback function with results after query has executed

            if (queryResult.rows.length > 0) {
                callback(null, queryResult.rows);
            }
        });
    };

    const getAllTweedsForLogin = (callback) => {
        // const queryString =
        //     "SELECT users.name, tweeds.id, tweeds.user_id, tweeds.tweed, tweeds.created_at FROM users INNER JOIN tweeds ON(users.id = tweeds.user_id) WHERE tweeds.id > 80 ORDER BY tweeds.id DESC";

        const queryString =
            "SELECT * FROM tweeds WHERE tweeds.id > 80 ORDER BY tweeds.id DESC";

        dbPoolInstance.query(queryString, (error, queryResult) => {
            if (error) {
                console.log("ERRRRROROROROROROR");
                console.log(error);
                callback(error, null);
                return;
            } else {
                if (queryResult.rows.length > 0) {
                    return callback(null, queryResult.rows);
                } else {
                    console.log("Insert Unsuccessful");
                    return callback(null, null);
                }
            }
            // invoke callback function with results after query has executed
        });
    };

    return {
        userLogin: userLogin,
        getName: getName,
        getAllTweedsForLogin: getAllTweedsForLogin,
    };
};
