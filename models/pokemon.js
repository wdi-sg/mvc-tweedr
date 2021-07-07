/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  // let getAll = (callback) => {

  //   let query = 'SELECT * FROM pokemons';

  //   dbPoolInstance.query(query, (error, queryResult) => {
  //     if( error ){

  //       // invoke callback function with results after query has executed
  //       callback(error, null);

  //     }else{

  //       // invoke callback function with results after query has executed

  //       if( queryResult.rows.length > 0 ){
  //         callback(null, queryResult.rows);

  //       }else{
  //         callback(null, null);

  //       }
  //     }
  //   });
  // };

  let getUserInfo = (userID, callback) => {

    let query = "SELECT * FROM pictures WHERE user_id='"+userID+"'";

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

  let getAllTweets = (userID, callback) => {

    let query = "SELECT * FROM tweets WHERE user_id='"+userID+"' ORDER BY id DESC";

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

  let createUser = (dataObj, callback) => {

    let query = "INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING *";

    const values = [dataObj.username, dataObj.password, dataObj.email];

    dbPoolInstance.query(query, values, (error, queryResult) => {
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

  let checkUser = (dataObj, callback) => {

    let query = "SELECT * FROM users WHERE username = $1";

    const values = [dataObj.username];

    dbPoolInstance.query(query, values, (error, queryResult) => {
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

  let createNewTweet = (userID, tweet, callback) => {

    let query = "INSERT INTO tweets (tweets, user_id) VALUES ($1, $2) RETURNING *";

    const values = [tweet, userID]


    dbPoolInstance.query(query, values, (error, queryResult) => {
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

  let uploadPics = (userID, dataObj, callback) => {

    console.log(dataObj)

    let query = "INSERT INTO pictures (background_url, profile_url, user_id) VALUES ($1, $2, $3) RETURNING *";

    const values = [dataObj.background_url, dataObj.profile_url, userID]


    dbPoolInstance.query(query, values, (error, queryResult) => {
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

  let deleteTweet = (tweetID, callback) => {

    console.log(tweetID)

    let query = "DELETE FROM tweets WHERE id =' "+tweetID+" '";

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

  return {
    // getAll,
    getUserInfo,
    getAllTweets,
    createUser,
    checkUser,
    createNewTweet,
    uploadPics,
    deleteTweet
  };
};