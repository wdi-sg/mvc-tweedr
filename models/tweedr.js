/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope
  let login = (data, callback) => {

    let query = 'SELECT * FROM users where name=$1 and password=$2';
    let values = [data.name, data.password]

    console.log("Model - User info");
    console.log(data.name);
    console.log(data.password);
    dbPoolInstance.query(query, values, (error, queryResult) => {
      if (error) {
        // invoke callback function with results after query has executed
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed
        if (queryResult.rows.length > 0) 
        {
          callback(null, queryResult.rows);
        } else {
          callback(null, null);
        }
      }
    });
  };

  let tweetsHistory = (callback) => {

    let query = 'SELECT tweetmsg, profile FROM tweets inner join users on tweets.userId = users.id order by created';
    console.log("Model - Tweet info");
    dbPoolInstance.query(query, (error, queryResult) => {
      if (error) 
      {
        callback(error, null);
      } else {
        if (queryResult.rows.length > 0) 
        {
          callback(null, queryResult.rows);
        } else {
          callback(null, null);
        }
      }
    });
  };
 // db.models.saveTweets(request.body, (error, tweetsHistory) => {
  let saveTweets = (data, callback) => {

    let query = 'INSERT INTO tweets (userid, tweetmsg, created) VALUES ($1, $2, $3)';
    let values = [data.userId, data.message, datestamp()];
    console.log("Model - save tweets");
    dbPoolInstance.query(query, values, (error, queryResult) => {
      if (error) 
      {
        callback(error, null);
      } 
      else 
      {
        tweetsHistory(callback);
      }
    });
  };

  let datestamp = function () {
    let date = new Date();
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  };

  return {
    login,
    tweetsHistory,
    saveTweets,
  };
};
