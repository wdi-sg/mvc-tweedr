/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let verifyUser = (user,callback) => {

    let query = `SELECT * FROM users WHERE username = '${user}';`;


    dbPoolInstance.query(query, (error, queryResult) => {

        callback(queryResult.rows)

    });
  };

  return {
    verifyUser,
  };
};