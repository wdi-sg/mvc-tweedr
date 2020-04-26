/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
const sha256 = require('js-sha256');

module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let registerUser = (username, pw, callback) => {
    let hashedpw = sha256(pw)
    values = [username, hashedpw]
    let queryString = "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *"
    dbPoolInstance.query(queryString, values, (err, queryResult) => {
        if (err){
            console.log("query error")
        } else {
            callback(err, queryResult.rows[0])
        }
    })
  };

  let verifyLogin = (username, pw, callback) => {
    let hashedpw = sha256(pw)
    let values = [username]
    let queryString = "SELECT * FROM users WHERE username = $1";
    dbPoolInstance.query(queryString, values, (err, queryResult) => {
        if (err){
            console.log("query error")
        } else {
            if (queryResult.rows[0].password === hashedpw){
                callback(err, true, queryResult.rows[0].id)
            } else {
                callback(err, false)
            }
        }
    })
  }

  return {
    registerUser,
    verifyLogin
  };
};