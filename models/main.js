/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope
    let getAll = (table, callback) => {
        let query = 'SELECT * FROM ' + table + ';';
        dbPoolInstance.query(query, (err, queryResult) => {
            if( err ){
                // invoke callback function with results after query has executed
                callback(err, null);
            }else{
                // invoke callback function with results after query has executed
                if( queryResult.rows.length > 0 ){
                    /*console.log("Result.rows :", queryResult.rows)*/
                    callback(null, queryResult.rows);
                }else{
                    callback(null, null);
                }
            }
        });
    };

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
    }

    return {
        getAll,
        login,
        checkUsers
    };
};
