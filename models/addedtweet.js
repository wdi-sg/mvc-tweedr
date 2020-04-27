/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
  // `dbPoolInstance` is accessible within this function scope

  let showAddedTweet = (user_id, callback) => {
    const userIdValues = [user_id];
    let query = "SELECT * FROM tweedr WHERE user_id = $1";

    dbPoolInstance.query(query, userIdValues, (error, queryResult) => {
      if (error) {
        // invoke callback function with results after query has executed
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed
        console.log(queryResult.rows);
        if (queryResult.rows.length > 0) {
          callback(null, queryResult.rows);
        } else {
          callback(null, null);
        }
      }
    });
  };
  let addTweet = (values, callback) => {
    // const values = [username, password];
    let insertQuery = "INSERT INTO tweedr (user_id,tweedr_msg) VALUES ($1,$2)";
    dbPoolInstance.query(insertQuery, values, (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        if (result.rows.length > 0) {
          console.log(result.rows);
          callback(null, result.rows);
        } else {
          callback(null, null);
        }
      }
    });
  };

  return {
    showAddedTweet,
    addTweet,
  };
};
