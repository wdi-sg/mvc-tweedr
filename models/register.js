/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let registerUser = (newUserInfo) => {
    var sha256 = require('js-sha256');
    const SALT = "what am I doing";

    let query = "INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING id";

    let arr = [newUserInfo.username, sha256(newUserInfo.password + SALT), newUserInfo.email];

    dbPoolInstance.query(query, arr, (error, queryResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        // callback(error, null);
        console.log("error: " + error);

      }else{
        console.log("sign up successful");
      }
    });
  };
  return {
    registerUser,
  };
};