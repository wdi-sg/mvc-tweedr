/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let getAllTweets = (callback) => {
    console.log(callback);

    let tweetQuery = 'SELECT users.username, tweets.tweetbody FROM users, tweets WHERE users.id = tweets.users_id;';

    dbPoolInstance.query(tweetQuery, (error, queryResult) => {
      if( error ){
        console.log(error)
        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed
        // invoke if result is not NULL
        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);
        // return NULL if value is not found in query
        }else{
          callback(null, null);

        }
      }
      console.log(tweetQuery)
    });
  };

  return {
    getAllTweets: getAllTweets,
  };
};