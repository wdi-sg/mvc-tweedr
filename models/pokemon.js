/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let getAll = (callback) => {
    let query = 'SELECT * FROM pokemons';

    dbPoolInstance.query(query, (error, queryResult) => {
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

  let getAllUsers = (callback) => {
    let query = 'SELECT * FROM users';

    dbPoolInstance.query(query, (error, queryResult) => {
      if ( error ) {
        callback(error, null);
      } else {
        if ( queryResult.rows.length > 0 ) {
          callback(null, queryResult.rows);
        } else {
          callback(null, null);
        }
      }
    });
  }

  let insertTweet = (callback) => {
    let values = []
    let query = 'INSERT INTO tweets (tweet, user_id) VALUES ($1, $2)';
  }

  let getAllTweets = (callback) => {
    let query = 'SELECT tweets.id, tweets.tweet, users.username FROM tweets INNER JOIN users ON (tweets.user_id = users.id)';

    dbPoolInstance.query(query, (error, queryResult) => {
      if ( error ) {
        callback(error, null);
      } else {
        if ( queryResult.rows.length > 0 ) {
          callback(null, queryResult.rows);
        } else {
          callback(null, null);
        }
      }
    });
  }

  return {
    getAll,
    getAllUsers,
    insertTweet,
    getAllTweets
  };
};