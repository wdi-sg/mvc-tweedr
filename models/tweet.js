/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope
let setTweet = (userId, msg, callback) => {
    let query = 'INSERT INTO tweets(user_id, message) VALUES($1,$2)';
    let values = [userId,msg];
    dbPoolInstance.query(query, values, (error, queryResult) => {
        console.log(query);
      callback(error);
    });
  };
  let getTweets = (callback) => {
    let query = 'SELECT * FROM tweets';
    dbPoolInstance.query(query,(error, queryResult) => {
      callback(error, queryResult);
    });
  };
  return {
    setTweet,
    getTweets
  };
};