/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
  // `dbPoolInstance` is accessible within this function scope

  let userLoggedIn = (username, callback) => {
    const values = [username];
    let query = "SELECT * FROM users WHERE name = $1";

    dbPoolInstance.query(query, values, (error, queryResult) => {
      if (error) {
        // invoke callback function with results after query has executed
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed

        if (queryResult.rows.length > 0) {
          console.log(queryResult.rows);

          console.log("moddddeeelll " + queryResult.rows.length);
          callback(null, queryResult.rows);
        } else {
          callback(null, null);
        }
      }

      // if (queryResult.rows.length > 0) {
      //   let reqPassword = request.body.password;
      //   if (reqPassword === queryResult.rows[0].password) {
      //     response.cookie("loginCookie", true);
      //   } else {
      //     response.send("Incorrect Password!");
      //   }
      // } else {
      //   response.send("No such user! Please register for an account.");
      // }
    });
  };

  return {
    userLoggedIn,
  };
};
