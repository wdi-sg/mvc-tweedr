/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = dbPoolInstance => {
  // `dbPoolInstance` is accessible within this function scope
 
  let registerUser = (callback, userRegistrationInfo) => {
    const { name, email, password } = userRegistrationInfo;

    const query = `INSERT INTO users (name, email, password) VALUES('${name}','${email}','${password}') RETURNING *`;

    dbPoolInstance.query(query, (error, queryResult) => {
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

  return {
    registerUser
  };
};
