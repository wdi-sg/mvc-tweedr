/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
const sha256 = require('js-sha256');

module.exports = dbPoolInstance => {
  // `dbPoolInstance` is accessible within this function scope
 
  let loginUser = (callback, userLoginInfo) => {
    let { email, password } = userLoginInfo;

    password = sha256(password);

    // const query = `INSERT INTO users (name, email, password) VALUES('${name}','${email}','${password}') RETURNING *`;
    const queryForUserEmail = `SELECT * FROM users WHERE users.email = '${email}'`;

    dbPoolInstance.query(queryForUserEmail, (error, queryResult) => {
        if (error) {
            // console.log("errrror!!!!", error);
            callback(error, null);
        } else {
            // if email is found in the database AND the hashed login password matches the hashed DB password
            if (queryResult.rows.length > 0 && queryResult.rows[0].password === password) {
                console.log("queryResult!!!", queryResult.rows);
                callback(null, queryResult.rows);
            } else {
                // if email is not found in the database
                callback(null, null);
            }
        }
    })

    // dbPoolInstance.query(query, (error, queryResult) => {
    //   if (error) {
    //     // invoke callback function with results after query has executed
    //     callback(error, null);
    //   } else {
    //     // invoke callback function with results after query has executed
    //     if (queryResult.rows.length > 0) {
    //       callback(null, queryResult.rows);
    //     } else {
    //       callback(null, null);
    //     }
    //   }
    // });
  };

  return {
    loginUser
  };
};
