/**
 * ===========================================
 * Modules required
 * ===========================================
 */


/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // verify if user is signed in, if so, perform the callback.
  const postMessage = (message, userID, callbackFunction) => {
    const queryString = 'INSERT INTO tweets (message, user_id) VALUES ($1, $2) RETURNING *;';
    const queryValues = [message, userID]
    dbPoolInstance.query(queryString, queryValues, callbackFunction);
  };


  const selectAllMessages = callback => {

    let query = 'SELECT tweets.message, users.username FROM tweets INNER JOIN users ON tweets.user_id = users.id;';

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
  }

  const selectIndividualMessage = (id, callback) => {
    const messageID = id;
    let query = 'SELECT tweets.message, users.username, tweets.id FROM tweets INNER JOIN users ON tweets.user_id = users.id;';

    dbPoolInstance.query(query, (error, queryResult) => {
      if( error ){
        // invoke callback function with results after query has executed
        callback(error, null);
      }else{
        // invoke callback function with results after query has executed
        if( queryResult.rows.length > 0 ){
          const messageResult = queryResult.rows.find(message => {return message.id == messageID} );
          callback(null, messageResult);
        }else{
          callback(null, null);
          
        }
      }
    })
  }


  return {
    postMessage,
    selectAllMessages,
    selectIndividualMessage
  };
};
