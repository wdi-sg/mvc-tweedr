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

            console.log("This is correct");
            callback(null, queryResult.rows);

        }else{

            console.log("This is wronggkkkk");
            callback(null, null);

        }
      }
    });


  };

  return {
    login,
  };
};