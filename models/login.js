const sha256 = require('js-sha256');

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

const userLogin = (login, callback) => {
    console.log("SELECTING QUERY");
    console.log(login);

    let queryString = "SELECT * FROM users WHERE user_name = ($1) AND password = ($2)";

    let requestedHashedPassword = sha256(login.password);

    let values = [login.username, requestedHashedPassword];

dbPoolInstance.query(queryString, values, (error, queryResult) => {
    if(error) {
        console.log("ERRRRROROROROROROR AT LOGIN QUERY");
        console.log(error);
        callback(error, null);
        return;
    }
        // invoke callback function with results after query has executed

        if(queryResult.rows.length > 0) {
            if(queryResult.rows[0].password === requestedHashedPassword) {
                console.log("IT'S A MATCH");
                 console.log("RESULTSSSS");
            console.log(queryResult.rows);
            callback(null, queryResult.rows);
            }

        } else {
            console.log("Invalid username or password");
            callback(null, null);
        }
});
}

const getName = (id, callback) => {

    const getQueryUser = "SELECT name FROM users WHERE id="+ id;

    dbPoolInstance.query(getQueryUser, (error, queryResult) => {
    if(error) {
        console.log("ERRRRROROROROROROR AT LOGIN QUERY");
        console.log(error);
        callback(error, null);
        return;
    }
        // invoke callback function with results after query has executed

        if(queryResult.rows.length > 0) {
            callback(null, queryResult.rows);
        }
    });
 }

  return {
    userLogin: userLogin,
    getName: getName
  };
};