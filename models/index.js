/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (pool) => {
  // `pool` is accessible within this function scope
  const getAll = (callback) => {
    const query = "SELECT name FROM users";
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

  const postRegister = (account, callback) => {
    const {name, password} = account;
    const query = "INSERT INTO users (name, password) VALUES ($1, $2) RETURNING *;";
    const values = [name, password];
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
    postRegister,
  };
};
