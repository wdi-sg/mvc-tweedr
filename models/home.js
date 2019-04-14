/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let getAllTweets = (callback) => {

    // let username = userNameCallback();

    let queryString = 'SELECT *, users.username FROM tweets INNER JOIN users ON (users.id=tweets.user_id);';

    dbPoolInstance.query(queryString, (error, result) => {
      if (error) {

       console.log("home query error", error);

      } else {

        // invoke callback function with results after query has executed
        console.log("home result.rows: ");
        console.log(result.rows);
        callback(result.rows);

      }
    });
  };

  return {
    homeModelFunction : getAllTweets
  };
};
