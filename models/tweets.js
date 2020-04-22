/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
const sha256 = require('js-sha256');

module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let Tweet = (tweettext, user_id, callback) => {
    values = [tweettext, user_id]
    let queryString = "INSERT INTO tweets (tweet, user_id) VALUES ($1, $2) RETURNING *"
    dbPoolInstance.query(queryString, values, (err, queryResult) => {
        if (err){
            console.log("query error")
        } else {
            callback(err, queryResult.rows[0])
        }
    })
  };

  let displayTweets = (user_id, callback) => {
    values = [user_id]
    let queryString = "SELECT tweet, users.username FROM tweets INNER JOIN users ON tweets.user_id = users.id WHERE user_id = $1"
    dbPoolInstance.query(queryString, values, (err, queryResult) => {
        if (err){
            console.log("query error")
        } else {
            callback(err, queryResult.rows)
        }
    })
  }

  return {
    Tweet,
    displayTweets
  };
};