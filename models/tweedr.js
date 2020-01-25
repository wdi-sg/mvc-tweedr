/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
 //must npm install js-sha256 and use it here
var sha256 = require('js-sha256');
const SALT = "saltprotector";

module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope
//suppose to be listing for all users
  let getAll = (callback) => {

    let query = 'SELECT * FROM users';

    dbPoolInstance.query(query, (error, queryResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      } else {

        // invoke callback function with results after query has executed

        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);

        } else {
          callback(null, null);

        }
      }
    });
  };

  let register = (user, callback) => {
    // set up query
    //hashing the password
    let hashedPw = sha256(user.password + SALT);
    let values = [user.name, hashedPw];
    let queryString = 'INSERT INTO users (name, password) VALUES ($1, $2) RETURNING *';
    // execute query
    dbPoolInstance.query(queryString, values, (error, queryResult) => {
            callback(error, queryResult);
    });
  };

    let login = (user, callback) => {
    // set up query
    let hashedPw = sha256(user.password + SALT);
    let values = [user.name];
    let queryString = 'SELECT * FROM users WHERE name=$1';
    // execute query
    dbPoolInstance.query(queryString, values, (error, queryResult) => {
            callback(error, queryResult);
    });
  };

  return {
    getAll: getAll,
    register: register,
    login: login
  };
};