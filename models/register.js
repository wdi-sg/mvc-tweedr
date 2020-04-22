/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let register = (name, callback) => {
    console.log("Beep Beep Beep");
    console.log(name);
    let query = 'INSERT into users (name, password) VALUES ($1, $2)';
    let data = [name.loginname, name.password];

    dbPoolInstance.query(query, data, (error, queryResult) => {
      if( error ){
        console.log("Error")
        console.log(error);
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
    register:register,
  };
};