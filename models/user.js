/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let newUser = (callback) => {
    let account = {};
    account.message = "Register An Account";
    account.formAction = "/register";
    account.user = 0;
    callback(null, account);
  };

  let registerUser = (newUser, callback) => {
    let input = [ newUser.name, newUser.password ]
    console.log(input);

    let query = `INSERT INTO users (name, password) VALUES ($1, $2) RETURNING *`;

    dbPoolInstance.query(query, input, (error, queryResult) => {
      if( error ){
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

  return {
    newUser,
    registerUser,
  };
};