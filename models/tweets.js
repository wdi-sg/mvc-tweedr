/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let registerTweet = (newTweet, callback) => {
    let input = [newTweet.user_id, newTweet.tweet];
    let query = 'INSERT INTO tweets (user_id,tweet ) VALUES ($1, $2) RETURNING *';

    dbPoolInstance.query(query, input, (error, queryResult) => {
      if (error) {
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed
        if (queryResult.rows.length > 0) {
          callback(null, queryResult.rows);
        } else {
          callback(null, null);
        }
      }
    });
  };

  let allTweets = (callback) => {
    let query = 'SELECT tweets.id, tweets.user_id, tweets.tweet, users.name ' +
      'FROM tweets JOIN users ON tweets.user_id=users.id '

    dbPoolInstance.query(query, (error, queryResult) => {
      if (error) {
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed
        if (queryResult.rows.length > 0) {
          callback(null, queryResult.rows);
        } else {
          callback(null, null);
        }
      }
    });
  };

  return {
    registerTweet,
    allTweets
  };
};