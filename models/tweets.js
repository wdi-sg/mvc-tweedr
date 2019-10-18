const sha256 = require('js-sha256');

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope
  
    let loginCheck = (user, callback) => {
        let input = [user.name]
      let query = 'SELECT * FROM users WHERE id=$1';
  
      dbPoolInstance.query(query, input ,(error, result) => {
        if( error ){
  
          // invoke callback function with results after query has executed
          callback(error, null);
  
        }else{
  
          // invoke callback function with results after query has executed
  
          if( result.rows.length > 0 ){
           if(sha256(user.password) === result.rows[0].password) {
             callback(null, result.rows[0]);
           } else {
               callback(null, true)
           }
  
          }else{
            callback(null, null);
  
          }
        }
      });
    };
  
    return {
      getAll,
    loginCheck
    };
  };
  