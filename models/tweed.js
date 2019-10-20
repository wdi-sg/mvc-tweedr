/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let registerTweed = (newTweed, callback) => {
    let input = [ newTweed.tweed, newTweed.user_id ];
    let query = 'INSERT INTO tweeds (tweed, user_id) VALUES ($1, $2) RETURNING *';

    dbPoolInstance.query(query, input, (error, queryResult) => {
      if( error ){
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

  let allTweeds = (callback) => {
    let query = 'SELECT tweeds.id, tweeds.tweed, tweeds.user_id, users.name ' +
                'FROM tweeds JOIN users ON tweeds.user_id=users.id ' +
                'ORDER BY tweeds.created_at DESC';

    dbPoolInstance.query(query, (error, queryResult) => {
      if( error ){
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
    registerTweed,
    allTweeds
  };
};