const sha256 = require('js-sha256');
const salt = 'salty';

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

//create new user /////
function createUser(value, callback) {
  const queryArray = [value.username, sha256(value.password + salt), value.email];
  const queryString = 'INSERT INTO users (user_name,password,email) VALUES ($1,$2,$3) RETURNING *';

  dbPoolInstance.query(queryString, queryArray, (err, queryResult) => {
    if (error) {
      // invoke callback function with results after query has executed
      callback(error, null);
    } else {
      // invoke callback function with results after query has executed
      if (queryResult.rows.length > 0) {
        callback(null, queryResult.rows);
      }
    }
  });
}

  let userLogin = (value, callback) => {
    const queryArray = [value.username];
    const queryString = 'SELECT * FROM users WHERE user_name = $1';
    dbPoolInstance.query(queryString, queryArray, (err, result) => {
      if(err){
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

  return {
    userCreate,
    userLogin,

  };
};
