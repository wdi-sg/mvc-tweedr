/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let getTweets = (callback) => {

    let query = 'SELECT * FROM tweets';

    dbPoolInstance.query(query, (error, queryResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed

        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);
            console.log("printing out result.rows for allTweets belowwww: ...")
            console.log(queryResult.rows);

        }else{
          callback(null, null);

        }
      }
    });
  };

  let getUsers = (callback) => {

      let query = 'SELECT * FROM users';

      dbPoolInstance.query(query, (error, queryResult) => {
          if (error) {

              // invoke callback function with results after query has executed
              callback(error, null);

          } else {

              // invoke callback function with results after query has executed

              if (queryResult.rows.length > 0) {
                  callback(null, queryResult.rows);
                  console.log("printing out result.rows for allUsers belowwww: ...")
                  console.log(queryResult.rows);

              } else {
                  callback(null, null);

              }
          }
      });
  };
  

  return {
    getTweets,
    getUsers,
  };
};
