/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let getAll = (callback) => {

    let query = 'SELECT * FROM pokemons';

    dbPoolInstance.query(query, (error, queryResult) => {
      if( error ){

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

  let checkLogin = (callback,name,password) => {
    
    let query = "SELECT * FROM users WHERE name='"+name+"'"
    
    dbPoolInstance.query(query, (error, queryResult) => {

      if( error ){
        callback(error, "Error");

      }else{
        
        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);

        }else{
          callback(null, "Username not found");
        }
      }
    });
  };

  return {
    checkLogin: checkLogin
  };
};
