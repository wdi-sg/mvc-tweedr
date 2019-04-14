/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = dbPoolInstance => {
  // `dbPoolInstance` is accessible within this function scope

  let getAll = callback => {
    let query =
      "SELECT users.id, tweets.id, users.username, tweets.tweet, tweets.date FROM tweets INNER JOIN users ON (users.id = tweets.user_id)";

    dbPoolInstance.query(query, (error, queryResult) => {
      if (error) {
        // invoke callback function with results after query has executed
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed

        if (queryResult.rows.length > 0) {
          callback(null, queryResult.rows);
        } else {
          callback(null, null);
        }
      }
    });
  };

  let makeTweet = (tweet, callback) => {
    let query =
      "INSERT INTO tweets" + "(user_id, tweet, date)" + "VALUES" + "($1, $2, $3)";
    let user_id = tweet.userId;
    let tweetContent = tweet.tweet;
    let dateObject = new Date();
    let day = dateObject.getDay().toString();
    let month = dateObject.getMonth().toString();
    let year = dateObject.getFullYear().toString();
    let date = year + "-" + month + "-" + day;
    let values = [user_id, tweetContent, date];
    dbPoolInstance.query(query, values, (error, queryResult) => {
      callback(error, queryResult);
    });
  };

  let login = (user_password, callback) => {
    let username = user_password.username.toString();
    let password = user_password.password.toString();
    let query = "SELECT * FROM passwords WHERE user_hash = $1";
    let values = [username];
    console.log(username);
    console.log(password);
    dbPoolInstance.query(query, values, (error, queryResult) => {
      if (error) {
        // invoke callback function with results after query has executed
        callback(error, null, null);
      } else {
        // invoke callback function with results after query has executed

        if (queryResult.rows.length > 0) {
          if (queryResult.rows.password_hash === password) {
            callback(null, queryResult.rows, true);
          } else {
            callback(null, queryResult.rows, false);
          }
        } else {
          callback(null, null, null);
        }
      }
    });
  };

  return {
    getAll,
    makeTweet,
    login
  };
};
