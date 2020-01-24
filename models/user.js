/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope
let validateUser = (username, callback) => {
    // console.log("HEY FROM MODDELLLLL", whenQueryDoneCallback() );
    let query = 'SELECT * FROM users WHERE username=$1';
    let values = [username];
    dbPoolInstance.query(query, values, (error, queryResult) => {
        console.log(queryResult.rows.length);
      callback(error, queryResult.rows);
    });
  };

  return {
    validateUser,
  };
};