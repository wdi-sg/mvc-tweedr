/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
// module.exports = (dbPoolInstance) => {

//   // `dbPoolInstance` is accessible within this function scope

//   let getAll = (callback) => {

//     let query = 'SELECT * FROM pokemons';

//     dbPoolInstance.query(query, (error, queryResult) => {
//       if( error ){

//         // invoke callback function with results after query has executed
//         callback(error, null);

//       }else{

//         // invoke callback function with results after query has executed

//         if( queryResult.rows.length > 0 ){
//           callback(null, queryResult.rows);

//         }else{
//           callback(null, null);

//         }
//       }
//     });
//   };

//   return {
//     getAll,
//   };
// };



module.exports = (registerInputInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let registerProcess = (values, callback) => {

    let query = ('INSERT INTO users (name, password) VALUES ($1, $2) RETURNING *');

    registerInputInstance.query(query, values, (error, queryResult) => {
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
    registerProcess: registerProcess
  };
};