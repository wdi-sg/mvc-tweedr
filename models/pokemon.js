/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (pool) => {

  // `dbPoolInstance` is accessible within this function scope

  let getAll = (callback) => {

    let query = 'SELECT * FROM pokemons';

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

  let registerAccount = (request, response, callback) => {
    let queryString = "INSERT INTO users (username, password) VALUES ($1, $2)";
    let values = [request.body.username, request.body.password];
    pool.query(queryString, values, (error, result) => {
      if(error) {
          callback(error, null);
      }else {
          queryString = "SELECT * FROM users WHERE username = '" + request.body.username + "'";
          pool.query(queryString, (error, result) => {
            if(error) {
              callback(error, null);
            }else if(result.rows.length > 0) {
              callback(null, result);
            }else {
              callback(null, null);
            }
          });
      }
    });
  };

  let viewHome = (request, response, callback) => {
    let queryString = "SELECT * FROM tweets WHERE user_id = " + request.cookies['userid'];
    pool.query(queryString, (error, result) => {
      if(error) {
        callback(error, null);
      }else if(result.rows.length > 0) {
        callback(null, result);
      }else {
        callback(null, null);
      }
    });
  };

  let loginAccount = (request, response, callback) => {
    let queryString = "SELECT * FROM users WHERE username = '" + request.body.username + "' AND password = '" + request.body.password + "'";
    pool.query(queryString, (error, result) => {
      if(error) {
        callback(error, null);
      }else if(result.rows.length > 0) {
        callback(null, result);
      }else {
        callback(null, null);
      }
    });
  };

  let submitTweet = (request, response, callback) => {
    let queryString = "INSERT INTO tweets (user_id, message) VALUES ($1, $2)";
    let values = [request.cookies['userid'], request.body.message];
    pool.query(queryString, values, (error, result) => {
      if(error) {
        callback(error, null);
      }else {
        queryString = "SELECT * FROM tweets WHERE user_id = " + request.cookies['userid'];
        pool.query(queryString, (error, result) => {
          if(error) {
            callback(error, null);
          }else if(result.rows.length > 0) {
            callback(null, result);
          }else {
            callback(null, null);
          }
        })
      }
    });
  }

  let submitNewHashTag = (request, response, callback) => {
    let queryString = "INSERT INTO hashtags (hashtag) VALUES ($1)";
    let values = [request.body.hashtag];
    pool.query(queryString, values, (error, result) => {
      if(error) {
        callback(error, null);
      }else {
        queryString = "SELECT * FROM hashtags";
        pool.query(queryString, (error, result) => {
          if(error) {
            callback(error, null);
          }else if(result.rows.length > 0) {
            callback(null, result);
          }else {
            callback(null, null);
          }
        })
      }
    });
  }

  let viewHashTag = (request, response, callback) => {
    let queryString = "SELECT * FROM hashtags";
    pool.query(queryString, (error, result) => {
      if(error) {
        callback(error, null);
      }else if(result.rows.length > 0) {
        callback(null, result);
      }else {
        callback(null, null);
      }
    });
  };

  return {
    getAll: getAll,
    registerAccount: registerAccount,
    viewHome: viewHome,
    loginAccount: loginAccount,
    submitTweet: submitTweet,
    submitNewHashTag: submitNewHashTag,
    viewHashTag: viewHashTag
  };
};