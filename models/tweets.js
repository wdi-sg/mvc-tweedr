/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */

var sha256 = require('js-sha256');

module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let getAll = (userTableId, callback) => {

    let query = 'SELECT * FROM tweets INNER JOIN users ON (tweets.users_id = users.id) WHERE tweets.users_id = $1';
    let values = [userTableId];
    dbPoolInstance.query(query, values, (error, queryResult) => {
        console.log('*******');
        console.log(queryResult.rows.length);
      if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed

        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);
          console.log('console logging request.rows');
          console.log(queryResult.rows);

        }else{
          callback(null, null);

        }
      }
    });
  };

    let register = (enteredUserId, enteredPassword,callback) => {
        let query = 'INSERT INTO users (user_id, password) VALUES ($1,$2)';
        const values = [enteredUserId, enteredPassword];
        dbPoolInstance.query(query, values, (error, queryResult) => {
              if( error ){

                // invoke callback function with results after query has executed
                callback(error, null);

              }else{
                // response.redirect('/')
                callback(null, null);
              }
        });
  };

    let login = (enteredUserId, enteredPassword, callback) => {
        let query = 'SELECT * FROM users WHERE user_id = $1';
        const values = [enteredUserId];
        dbPoolInstance.query(query, values, (error, queryResult) => {
            if( error ){

                // invoke callback function with results after query has executed
                callback(error, null);

            }else{

                // invoke callback function with results after query has executed

                if( queryResult.rows.length > 0 ){
                  callback(null, [queryResult.rows[0].password,queryResult.rows[0].id]);

                }else{
                  callback(null, null);
                  console.log('You have entered the wrong user name!');

                }
            }
        });
  };

    let getHashtags = (callback) => {

    let query = 'SELECT * FROM hashtags';

    dbPoolInstance.query(query, (error, queryResult) => {
        console.log('*******');
        console.log(queryResult.rows.length);
      if( error ){

        // invoke callback function with results after query has executed
        console.log('error 1');
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed

        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);
          console.log('query results inside of the model look here ******************: ' + queryResult.rows)

        }else{
          callback(null, null);
          console.log('no person name that you have serached');

        }
      }
    });
  };

    let tweet = (tweetmsg, userTableId, callback) => {
        let query = 'INSERT INTO tweets (users_id, tweet) VALUES ($1,$2) RETURNING *';
        const values = [userTableId, tweetmsg];
        dbPoolInstance.query(query, values, (error, queryResult) => {
              if( error ){

                // invoke callback function with results after query has executed
                callback(error, null);

              }else{
                // response.redirect('/')
                console.log('SEE HERE FOR THE RETURN RESULT AFTER ADDING')
                console.log (queryResult.rows[0]);
                callback(null, queryResult.rows[0]);
              }
        });
  };

    let addHashtag = (newId, hashSelector, callback) => {
        let query = 'INSERT INTO hashtags_tweets (tweets_id, hashtag_id) VALUES ($1,$2)';
        const values = [newId, parseInt(hashSelector)];
        dbPoolInstance.query(query, values, (error, queryResult) => {
              if( error ){

                // invoke callback function with results after query has executed
                callback(error, null);

              }else{
                // response.redirect('/')
                callback(null, queryResult.rows);
              }
        });
  };

  return {
    getAll: getAll,
    register: register,
    login: login,
    tweet: tweet,
    getHashtags: getHashtags,
    addHashtag: addHashtag,
  };
};