/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

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
  };

  let login = (input, callback) => {
    let username = input.username;
    let password = input.password;
    let query = "SELECT * FROM users WHERE username = $1";
    let values = [username];
    console.log(username);
    console.log(password);
    
    dbPoolInstance.query(query, values, (error, queryResult) => {
      if (error) {
        // invoke callback function with results after query has executed
        callback(error, null, null);
      } else {
        // invoke callback function with results after query has executed

        if (queryResult.rows.length > 0) {
          if (queryResult.rows[0].password === password) {
            callback(null, queryResult.rows, true);
          } else {
            callback(null, queryResult.rows, false);
          }
        } else {
          callback(null, null, null);
        }
      }
    });
  };

  return {
    getAll,
    login
  };
};
