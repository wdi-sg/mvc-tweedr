/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (pool) => {

  // `dbPoolInstance` is accessible within this function scope

  let getAll = (callback) => {

    let query = 'SELECT * FROM users';

    pool.query(query, (error, queryResult) => {
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

 

const afterRegister = (account,callback) => {
  const {name,password} = account;
  const query = "INSERT INTO users (name,password) VALUES ($1,$2) RETURNING *;" ;
  const values = [name,password];
  pool.query(query,values, (error,queryResult) => {
    if ( error ) {
      // invoke callback function with results after query has executed
      callback(error, null);
    } else {
      // invoke callback function with results after query has executed
      if ( queryResult.rows.length > 0 ) {
        callback(null, queryResult.rows);
      } else {
        callback(null, null);
      }
    }
  });
};
const afterLogin = (name,callback) => {
  const query = "SELECT * FROM users WHERE name=$1";
  const values = [name];
  pool.query(query,values, (error,queryResult) => {
    if ( error ) {
      // invoke callback function with results after query has executedb
      callback(error, null);
    } else {
      // invoke callback function with results after query has executed
      if ( queryResult.rows.length > 0 ) {
        callback(null, queryResult.rows);
      } else {
        callback(null, null);
      }
    }
  });
};

return {
  getAll,
  afterRegister,
  afterLogin,
};
};
