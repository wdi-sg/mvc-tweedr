/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let getAll = (callback) => {

    let query = 'SELECT * FROM pokemons';

    dbPoolInstance.query(query, (error, queryResult) => {
      if( error ){
        callback(error, null);
      }else if ( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);
        }else{
          callback(null, null);
        }

    });
  };

  let getAllTweets = (callback) => {
    let query = 'SELECT * FROM tweets';

    dbPoolInstance.query(query, (err, result) => {
        if (err){
            callback(err, null);
        } else if (result.rows.length > 0){
            callback(null, result.rows);
        } else {
            callback(null, null);
        }
    })
  }



  return {
    getAll,
    getAllTweets
  };
};