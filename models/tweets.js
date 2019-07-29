/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let getAllTweets = (callback) => {

    let query = 'SELECT * FROM tweets';

    dbPoolInstance.query(query, (error, queryResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        // callback(error, null);
        console.log("error: " + error);

      }else{
        callback(null, queryResult.rows);

      }
    });
  };

  return {
    getAllTweets,
  };
};