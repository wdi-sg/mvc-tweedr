/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
    // `dbPoolInstance` is accessible within this function scope

    let insertTweed = (tweed, id, callback) => {
        const getQueryUser =
            "INSERT INTO tweeds(user_id, user_name, tweed) VALUES($1, $2, $3) RETURNING *";

        const values = [id, tweed.username, tweed.tweed];

        dbPoolInstance.query(getQueryUser, values, (error, queryResult) => {
            if (error) {
                console.log("ERRRRROROROROROROR");
                console.log(error);
                callback(error, null);
                return;
            } else {
                if (queryResult.rows.length > 0) {
                    console.log("Tweed inserted!");
                    callback(null, queryResult.rows);
                } else {
                    console.log("Insert Unsuccessful");
                    callback(null, null);
                }
            }
            // invoke callback function with results after query has executed
        });
    };

    let displayTweed = (callback) => {
        const queryString =
            "SELECT users.name, tweeds.id, tweeds.user_id, tweeds.tweed, tweeds.created_at FROM users INNER JOIN tweeds ON(users.id = tweeds.user_id) WHERE tweeds.id > 80 ORDER BY tweeds.id DESC";

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

    let favoritedTweed = (user_id, tweed_id, callback) => {
        const queryString =
            "INSERT INTO favorites(user_id, tweed_id) VALUES($1, $2) RETURNING *";

        const values = [user_id, tweed_id];
        dbPoolInstance.query(queryString, values, (error, queryResult) => {
            if (error) {
                console.log("ERRRRROROROROROROR");
                console.log(error);
                callback(error, null);
                return;
            } else {
                if (queryResult.rows.length > 0) {
                    return callback(null, queryResult.rows);
                } else {
                    console.log("Unsuccessful");
                    return callback(null, null);
                }
            }
        });
    };

    return {
        insertTweed: insertTweed,
        displayTweed: displayTweed,
        favoritedTweed: favoritedTweed,
    };
};
