const sha256 = require('js-sha256');
const salt = 'tweedrsalt';

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let userCreate = (values, callback) => {
    const queryArray = [values.username, sha256(values.password+salt), values.name, values.email];
    const queryString = 'INSERT INTO users (username, password, name, email) VALUES ($1, $2, $3, $4) RETURNING *';

    dbPoolInstance.query(queryString, queryArray, (error, queryResult) => {
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

  let userLogin = (values, callback) => {
    const queryArray = [values.username];
    const queryString = 'SELECT * FROM users WHERE username = $1';
    dbPoolInstance.query(queryString, queryArray, (error, queryResult) => {
      console.log(queryResult);
      if( error ){
        // invoke callback function with results after query has executed
        callback(error, null);
      }else{
        // invoke callback function with results after query has executed
        if( queryResult.rows.length > 0 ){
          callback(null, queryResult);
        }else{
          callback(null, null);
        }
      }
    });
  };

  let tweedCreate = (v1, v2, callback) => {
    const queryArray = [v1.message, v2];
    const queryString = 'INSERT INTO tweeds (message, user_id) VALUES ($1, $2) RETURNING *';

    dbPoolInstance.query(queryString, queryArray, (error, queryResult) => {
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

  let tweedIndex = (values, callback) => {
    const queryArray = [values];
    const queryString = 'SELECT * from tweeds where user_id = $1';

    dbPoolInstance.query(queryString, queryArray, (error, queryResult) => {
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

  let userProfile = (values, callback) => {
    const queryArray = [values];
    const queryString = 'SELECT * from users where id = $1';

    dbPoolInstance.query(queryString, queryArray, (error, queryResult) => {
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

  return {
    userCreate,
    userLogin,
    tweedCreate,
    tweedIndex,
    userProfile
  };
};
