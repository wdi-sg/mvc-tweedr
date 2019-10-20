/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
  // `dbPoolInstance` is accessible within this function scope
  const sha256 = require('js-sha256');
  const SALT = "bababanana";
//////SHOW ALL TWEETS//////
  let getAllTweetsData = (callback) => {
    let query = 'SELECT * FROM tweets';

    dbPoolInstance.query(query, (error, queryResult) => {
      if ( error ){
        // invoke callback function with results after query has executed
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed
        if ( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);
        } else {
          callback(null, null);
        }
      }
    });
  };
//////ADD NEW USER TO DB//////
  let addNewUser = (newUser, callback) => {
    //newUser defined in controller as request.body
    let hashedPassword = sha256(newUser.password + SALT);
    let newValues = [newUser.name, newUser.email, newUser.username, hashedPassword];

    const query = `INSERT INTO users (name, email, username, password) VALUES ($1, $2, $3, $4) RETURNING *`;

    dbPoolInstance.query(query, newValues, (error, queryResult) => {
        console.log ("this is queryResult from models: ", queryResult);
        console.log("this is queryResult.rows from models: ", queryResult.rows);
      if ( error ){
        callback(error, null);
      } else {
          if ( queryResult.rows.length > 0 ){
            callback(null, queryResult.rows);
          } else {
            callback(null, null);
          }
      }
    });
  };














  return {
    getAllTweetsData,
    addNewUser
  };
};