/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let getTweet = (callback) => {

    let query = 'SELECT * FROM tweets';

    dbPoolInstance.query(query, (error, queryResult) => {
      if( error ){
        console.log("Error")
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
    getTweet:getTweet,
  };
};