/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {


    //for checking logins
    let login = (username, callback) => {
        let query = "SELECT * FROM users WHERE username='"+username+"';";
        dbPoolInstance.query(query, (err, queryResult) => {
            if( err ){
                // invoke callback function with results after query has executed
                callback(err, null);
            }else{
                // invoke callback function with results after query has executed
                if( queryResult.rows.length > 0 ){
                    /*console.log("Result.rows :", queryResult.rows)*/
                    callback(null, queryResult.rows[0]);
                }else{
                    callback(null, null);
                }
            }
        });
    };

    //for registering new accounts
    let checkUsers = (username, callbacks) => {
        let query = "SELECT * FROM users WHERE username='"+username+"';";
        dbPoolInstance.query(query, (err, queryResult) => {
            if( err ){
                // invoke callback function with results after query has executed
                callbacks(err, null);
            }else{
                // invoke callback function with results after query has executed
                if( queryResult.rows.length > 0 ){
                    /*console.log("Result.rows :", queryResult.rows)*/
                    callbacks(null, queryResult.rows[0]);
                }else{
                    callbacks(null, null);
                }
            }
        });
    };

    //query for adding Users into DB;
    let addUsers = (newUser, callbacks) => {
        let query = "INSERT INTO users (username, passhash) VALUES ($1, $2) RETURNING id;";
        let values = [newUser.username, newUser.passhash];
        dbPoolInstance.query(query, values, (err, queryResult) => {
            if( err ){
                // invoke callback function with results after query has executed
                callbacks(err, null);
            }else{
                // invoke callback function with results after query has executed
                if( queryResult.rows.length > 0 ){
                    /*console.log("Result.rows :", queryResult.rows)*/
                    callbacks(null, queryResult.rows[0]);
                }else{
                    callbacks(null, null);
                }
            }
        });
    };

    //query for adding new user profiles
    let addUserProfile = (username, callbacks) => {
        let query = "INSERT INTO users_profile (name) VALUES ($1);";
        let values = [username];
        dbPoolInstance.query(query, values, (err, queryResult) => {
            if( err ){
                // invoke callback function with results after query has executed
                callbacks(err, null);
            }else{
                // invoke callback function with results after query has executed
                if( queryResult.rows.length > 0 ){
                    /*console.log("Result.rows :", queryResult.rows)*/
                    callbacks(null, queryResult.rows[0]);
                }else{
                    callbacks(null, null);
                }
            }
        })
    }


    //query for adding messages
    let addTweed = (tweed, callbacks) => {
        let query = "INSERT INTO tweeds (message, owner_id) VALUES ($1, $2) RETURNING id;";
        let values = [tweed.message, tweed.owner_id];
        dbPoolInstance.query(query, values, (err, queryResult) => {
            if( err ){
                // invoke callback function with results after query has executed
                callbacks(err, null);
            }else{
                // invoke callback function with results after query has executed
                if( queryResult.rows.length > 0 ){
                    /*console.log("Result.rows :", queryResult.rows)*/
                    callbacks(null, queryResult.rows[0]);
                }else{
                    callbacks(null, null);
                }
            }
        })
    }


    let getTweed = (messageId, callbacks) => {
        let query = "SELECT * FROM tweeds WHERE id="+messageId+";";
        dbPoolInstance.query(query, (err, queryResult) => {
            if( err ){
                // invoke callback function with results after query has executed
                callbacks(err, null);
            }else{
                // invoke callback function with results after query has executed
                if( queryResult.rows.length > 0 ){
                    /*console.log("Result.rows :", queryResult.rows)*/
                    callbacks(null, queryResult.rows[0]);
                }else{
                    callbacks(null, null);
                }
            }
        })
    }


    let getTweeds = (callbacks) => {
        let query = "SELECT * FROM tweeds";
        dbPoolInstance.query(query, (err, queryResult) => {
            if( err ){
                // invoke callback function with results after query has executed
                callbacks(err, null);
            }else{
                // invoke callback function with results after query has executed
                if( queryResult.rows.length > 0 ){
                    /*console.log("Result.rows :", queryResult.rows)*/
                    callbacks(null, queryResult.rows);
                }else{
                    callbacks(null, null);
                }
            }
        })
    }


    let getUsers = (callbacks) => {
        let query = "SELECT username, id FROM users";
        dbPoolInstance.query(query, (err, queryResult) => {
            if (err) {
                callbacks(err, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callbacks(null, queryResult.rows);
                } else {
                    callbacks(null, null);
                }
            }
        })
    }


    let getProfile = (profileId, callbacks) => {
        let query = "SELECT * FROM users_profile WHERE id='" + profileId + "';";
        dbPoolInstance.query(query, (err, queryResult) => {
            if (err) {
                callbacks(err, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callbacks(null, queryResult.rows[0]);
                } else {
                    callbacks(null, null);
                }
            }
        })
    }

    let editProfile;


    return {
        login,
        checkUsers,
        addUsers,
        addUserProfile,
        addTweed,
        getTweed,
        getTweeds,
        getUsers,
        getProfile,
        editProfile
    };
};
