/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
    // `dbPoolInstance` is accessible within this function scope
    let userProfile = (id, callback) => {
        const queryString = "SELECT * FROM tweeds WHERE tweeds.user_id=$1";
        const values = [id];

        dbPoolInstance.query(queryString, values, (error, queryResult) => {
            if (error) {
                console.log("ERRRRROROROROROROR");
                console.log(error);
                callback(error, null);
                return;
            } else {
                if (queryResult.rows.length > 0) {
                    console.log("Getting User's Data");
                    return callback(null, queryResult.rows);
                } else {
                    console.log("Unable to retrieve data");
                    return callback(null, null);
                }
            }
            // invoke callback function with results after query has executed
        });
    };

    return {
        userProfile: userProfile,
    };
};
