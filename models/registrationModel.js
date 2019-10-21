/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
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
      }) 
    };
      // `dbPoolInstance` is accessible within this function scope
  
    let getTweedr = (callback) => {
  
      let queryTweedr = 'SELECT * FROM tweedr';
  
      dbPoolInstance.query(queryStudents, (error, queryResult) => {
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
      getTweedr
    };
  };
  