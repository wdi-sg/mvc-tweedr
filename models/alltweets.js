/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
  // `dbPoolInstance` is accessible within this function scope

  let allTweets = (callback) => {
    let query =
      "SELECT tweedr.tweedr_msg, users.name,users.id from tweedr INNER JOIN users ON (users.id = tweedr.user_id)";

    dbPoolInstance.query(query, (error, queryResult) => {
      if (error) {
        console.log(error);
        // invoke callback function with results after query has executed
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed

        if (queryResult.rows.length > 0) {
          console.log(queryResult.rows);

          console.log("moddddeeelll all tweets " + queryResult.rows.length);
          callback(null, queryResult.rows);
        } else {
          callback(null, null);
        }
      }
    });
  };

  return {
    allTweets,
  };
};
