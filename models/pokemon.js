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
        if (queryResult.rows.length>0){
        callback(queryResult.rows[0])
        } else {
        callback(null);
        }
    });
  };

  return {
    verifyUser,
  };
};