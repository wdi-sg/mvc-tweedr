const sha256 = require('js-sha256');

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let register = (name, callback) => {

    let queryString = "INSERT INTO users(name, user_name, password) VALUES($1, $2, $3) RETURNING *";

    let hashedPassword = sha256(name.password);

    let input = [name.name, name.user_name, hashedPassword];

    dbPoolInstance.query(queryString, input, (error, queryResult) => {

      if( error ) {
        console.log("ERRRRROR WHEN INSERTING USER DATA");
        console.log(error);
        // invoke callback function with results after query has executed
        callback(error, null);
      }
      console.log("###################")
      console.log(queryResult.rows);

        // invoke callback function with results after query has executed

        if( queryResult.rows.length > 0 ) {
          callback(null, queryResult.rows);
          console.log(queryResult.rows);
          console.log("USER DATA HAS BEEN STORED");
          console.log("#################");
          return;
        } else {
          console.log("UNABLE TO REGISTER");
          callback(null, null);

        }
      });
    };


  return {
    register: register,
  };
}