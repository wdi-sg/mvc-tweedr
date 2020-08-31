/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let userLogin = (enteredUsername, enteredPassword, callback) => {
    let query = `select * from users where username=$1`;
    let values = [enteredUsername];
    dbPoolInstance.query(query, values, (queryErr, queryResult) => {
      if (queryErr) {
        console.log("-- Error in userLogin model", queryErr.message)
      } else {
        if (queryResult.rows.length < 1) {
          callback(null, false)
        } else {
          if (queryResult.rows[0].password !== enteredPassword) {
            callback(null, "wrong password")
          } else {
            callback(null, queryResult.rows[0])
          }
        }
      }
    })
  };

  return {
    userLogin,

  };
};
