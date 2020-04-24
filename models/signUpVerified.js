/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
  // `dbPoolInstance` is accessible within this function scope

  let checkUser = (username, callback) => {
    const checkUserValues = [username];
    let query = "SELECT * FROM users WHERE name = $1";

    dbPoolInstance.query(query, checkUserValues, (error, queryResult) => {
      if (error) {
        // invoke callback function with results after query has executed
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
  let createUser = (values, callback) => {
    // const values = [username, password];
    let insertQuery = "INSERT INTO users (name,password) VALUES ($1,$2)";
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
    checkUser,
    createUser,
  };
};
