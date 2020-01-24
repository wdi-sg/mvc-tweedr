/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let getAll = (table, callback) => {

    let query = 'SELECT * FROM ' + table + ';';

    dbPoolInstance.query(query, (error, queryResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed

        if( queryResult.rows.length > 0 ){
            /*console.log("Result.rows :", queryResult.rows)*/
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
