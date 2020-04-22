/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let allUsers = (username, callback) => {
    console.log("****************ENTERED USERS");
    let query = 'SELECT * FROM users WHERE NOT name= ($1)';
    let data = [username];
    dbPoolInstance.query(query, data, (error, queryResult) => {
      if( error ){
        console.log("Error")
        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed

        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);

        }else{
          callback(null, null);

        }
      }
    });
  };

  return {
    allUsers:allUsers,
  };
};