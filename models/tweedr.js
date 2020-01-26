/*===========================================
 Export model functions as a module
 ===========================================*/



module.exports = (dbPoolInstance) => {
  // `dbPoolInstance` is accessible within this function scope
  let getAll = (callback) => {
    let query = 'SELECT * FROM tweedr';
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
    getAll,
  };
};




// module.exports = dbPoolInstance => {
//   let register = (username, password, callback) => {
//     const values = [username, password];
//     const query =
//       "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *";
//     dbPoolInstance.query(query, values, (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(result.rows);
//       }
//     });
//   };

//   return {
//     getAll: getAll
//   };
// };





