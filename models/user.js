/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
const SALT = 'durians';

const sha256 = require('js-sha256');


module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

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

let registerUser = (data, doneWithQuery) => {
// 32

let has = sha256(data.password+ SALT);

let query = "insert into users (name, email, password) Values ($1, $2, $3) returning *"

const values = {data.name, data.email, hash];

    dbPoolInstance.query(query, values, (errObj, result)
        => {

            if(errObj) {
                console.log("error", errObj);
            }
                console.log("done!");
                const createdUsed = result.rows[0];
                doneWithQuery(createdUser);
        });
};

return {
registerUser,
};
};