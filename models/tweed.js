/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let getAll = (data,callback) => {

    let query = `INSERT INTO tweets (user_id, tweets) VALUES(${data.userId}, '${data.userTweed}')`;

       // INSERT INTO tweets (user_id, tweets) VALUES(1, 'HEHEHEH');

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