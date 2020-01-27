/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    let getAll = (callback) => {

    let query = 'SELECT * FROM tweets';

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

    let registerUser = (callback,data) => {

    let values = [data.name, data.password];

    let query = "INSERT INTO users (name,password) VALUES ($1,$2) RETURNING *";

    dbPoolInstance.query(query, values, (error, queryResult) => {
        console.log(error);
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
    }

    let loginUser = (callback,data) => {

        let values = [data.name];

        let query = "SELECT * FROM users WHERE name = $1";

        dbPoolInstance.query(query,values,(error, queryResult) => {
            console.log(queryResult.rows);
            if (error) {
                console.log("this is loginUser error: ", error);
            } else {
                if (queryResult.rows.length > 0) {
                    console.log(queryResult.rows);
                    callback(null, queryResult.rows);
                } else {
                    console.log(queryResult.rows);
                    callback(null, null);
                    }
                } 
        });
    }

    return {
        getAll: getAll,
        registerUser: registerUser,
        loginUser: loginUser
    };
};