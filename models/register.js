/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
const sha256 = require('js-sha256');

module.exports = dbPoolInstance => {
  // `dbPoolInstance` is accessible within this function scope
 
  let registerUser = (callback, userRegistrationInfo) => {
    let { name, email, password } = userRegistrationInfo;

    password = sha256(password);

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
