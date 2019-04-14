/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let login = (data, callback) => {

    let query = `SELECT * FROM users WHERE name='${data.name}'`;

    dbPoolInstance.query(query, (error, queryResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed

        if( queryResult.rows.length > 0 ){

            if (queryResult.rows[0].password === data.password) {
                console.log("Password is correct");
                callback(queryResult.rows);
            } else {
                console.log("Password is wrong");
                console.log(data.pasword);
                callback("Password is wrong");
            }


        }else{

            console.log("Username not found");
            callback("Username not found");

        }
      }
    });


  };

  return {
    login,
  };
};