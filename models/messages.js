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


  return {
    postMessage
  };
};
