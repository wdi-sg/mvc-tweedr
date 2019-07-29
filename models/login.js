/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let letsLogin = (callback, currentUsername) => {

    let query = "SELECT * FROM users WHERE username='"+ currentUsername + "'";

    dbPoolInstance.query(query, (error, queryResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        // callback(error, null);
        console.log("error: " + error);

      }else{
        callback(queryResult.rows[0]);
      }
    });
  };
  return {
    letsLogin,
  };
};