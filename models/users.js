/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (pool) => {
  // `pool` is accessible within this function scope
  const getAll = (callback) => {
    const query = "SELECT * FROM tweets INNER JOIN users ON (tweets.user_id = users.id)";
    pool.query(query, (error, queryResult) => {
      if ( error ) {
        // invoke callback function with results after query has executed
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed
        if ( queryResult.rows.length > 0 ) {
          callback(null, queryResult.rows);
        } else {
          callback(null, null);
        }
      }
    });
  };

  const postTweet = (data, callback) => {
    const {message, user_id} = data;
    const query = "INSERT INTO tweets (message, user_id) values ($1, $2) RETURNING *";
    const values = [message, user_id];
    pool.query(query, values, (error, queryResult) => {
      if ( error ) {
        // invoke callback function with results after query has executed
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed
        if ( queryResult.rows.length > 0 ) {
          callback(null, queryResult.rows);
        } else {
          callback(null, null);
        }
      }
    });
  };


  return {
    getAll,
    postTweet,
  };
};
