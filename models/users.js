/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
const SALT = 'hs98q0f%323#ehqiw234@';
const sha256 = require('js-sha256');

// `dbPoolInstance` is accessible within this function scope
module.exports = (dbPoolInstance) => {

  let registerInfo = (data, doneWithQuery) => {
    // console.log("register in users.js");
    // console.log("Im data"+ data);
    let hash = sha256(data.password + SALT);
    let query = "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *"
    const values = [data.name, hash];

    dbPoolInstance.query(query, values, (err, result) => {

      if(err){
        console.log("ERROR", err);
      } else {
        // console.log("Done with query! I'm inside MODEL");
        // console.log("I'm " + result.rows[0]);
        const createdUser = result.rows[0];
        doneWithQuery(createdUser);
      }
    });
  };

  return {
    register: registerInfo,
  };
};

// getAll,

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