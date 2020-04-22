/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */

var sha256 = require('js-sha256');

module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let getAll = (callback) => {

    let query = 'SELECT * FROM tweets';

    dbPoolInstance.query(query, (error, queryResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed

        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);

        }else{
          callback(null, null);

        }
      }
    });
  };

    let register = (enteredUserId, enteredPassword,callback) => {
        let query = 'INSERT INTO users (user_id, password) VALUES ($1,$2)';
        const values = [enteredUserId, enteredPassword];
        dbPoolInstance.query(query, values, (error, queryResult) => {
              if( error ){

                // invoke callback function with results after query has executed
                callback(error, null);

              }else{
                // response.redirect('/')
                callback(null, null);
              }
        });
  };

  return {
    getAll: getAll,
    register: register,
  };
};