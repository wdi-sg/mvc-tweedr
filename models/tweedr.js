/**
* ===========================================
* Export model functions as a module
* ===========================================
*/
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let getAll = (callback) => {
    let query = 'SELECT * FROM tweeds';

    dbPoolInstance.query(query, (error, queryResult) => {
      if (error) {
        callback(error, null);
      } else {
        if (queryResult.rows.length > 0) {
          callback(null, queryResult.rows);
        } else {
          callback(null, null);
        }
      }
    });
  };

  let newTweed = (info, callback) => {
    const user_id = info.user_id;
    const username = info.username;
    const content = info.content;
    const hashtags = info.hashtags.join(' ');

    let query = 'INSERT INTO tweeds (user_id, username, content, hashtags) VALUES ($1, $2, $3, $4)';

    dbPoolInstance.query(query, [user_id, username, content, hashtags], (error, queryResult) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, queryResult);
      }
    });
  };

  return {
    getAll,
    newTweed
  };
};