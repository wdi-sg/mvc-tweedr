/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

const register = (inputValues) => {





    const queryString = "INSERT INTO users(name, user_name, email, password) VALUES($1, $2, $3, $4) RETURNING *";

    dbPoolInstance.query(queryString, inputValues, (error, result) => {
        if(error) {
            console.log("ERRRROR");
            console.log(error);
            return;
        }
        console.log(result.rows);
        console.log("SUCCESS WITH REGISTRATION");
        res.cookie('Username', result.rows[0].user_name);
    })
}


  return {
    registerAccount: register
  };
};


// let getAll = (callback) => {

  //   let query = 'SELECT * FROM pokemons';

  //   dbPoolInstance.query(query, (error, queryResult) => {
  //     if( error ){

  //       // invoke callback function with results after query has executed
  //       callback(error, null);

  //     }else{

  //       // invoke callback function with results after query has executed

  //       if( queryResult.rows.length > 0 ){
  //         callback(null, queryResult.rows);

  //       }else{
  //         callback(null, null);

  //       }
  //     }
  //   });
  // };