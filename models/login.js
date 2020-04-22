/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let login = (name, callback) => {
    console.log("Loud Loud Loud");
    console.log(name);
    let query = 'SELECT * FROM users WHERE name = ($1) AND password = ($2)';
    let data = [name.loginname, name.password];

    dbPoolInstance.query(query, data, (error, queryResult) => {
      if( error ){
        console.log("Error")
        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed

        if( queryResult.rows.length > 0 ){
                      console.log("BOom Boom Boon Boon");
          console.log(queryResult.rows);
          callback(null, queryResult.rows);

        }else{
            console.log("Wrong User Entry")
          callback(null, null);

        }
      }
    });
  };

  return {
    login:login,
  };
};