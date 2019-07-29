var sha256 = require('js-sha256');

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope
  let TWEEDR = "This is the secret";



  let getSingle = (callback,id) => {

    let query = 'SELECT * FROM users WHERE userid=' + parseInt(id);

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
  }

  let getAll = (callback) => {

    let query = 'SELECT * FROM users';

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
  }



  let createUser = (callback,username,password) => {

    let hashedPassword = sha256( password + TWEEDR );
    const query = "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *";
    const values = [username, hashedPassword];

    dbPoolInstance.query(query, values, (error, queryResult) => {

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
  }

  let checkUser = (callback,username,password) => {

    const query = 'SELECT * FROM users WHERE username=$1 AND password=$2';
    let hashedPassword = sha256( password + TWEEDR );
    let values = [username, hashedPassword];

    dbPoolInstance.query(query, values, (error, queryResult) => {

        if( error ){
        // invoke callback function with results after query has executed
        callback(error, null);

        } else if (queryResult.rows[0] === undefined) {
            callback(null, null)
        // invoke callback function with results after query has executed
        } else if( queryResult.rows.length > 0 ){
            callback(null, queryResult.rows);
        } else{
            callback(null, null);
        }
    })
  }



  return {
    getSingle,
    getAll,
    createUser,
    checkUser
  };
};