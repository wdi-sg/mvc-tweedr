/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
  const sha256 = require('js-sha256');
  // `dbPoolInstance` is accessible within this function scope

  let getAll = (callback) => {

    let query = 'SELECT * FROM tweetdb';

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

  let signup = (dataIn, callback) => {
    var username = dataIn.username;
    var password = dataIn.password;
    var confirm = dataIn.confirm;

    password = sha256(password);
    confirm = sha256(confirm);
    if (password == confirm) {
      let query = 'INSERT INTO userdb (username,password) VALUES($1,$2) RETURNING userid';
      const values = [username, password];
      dbPoolInstance.query(query, values, (error, queryResult) => {
        if (error) {

          // invoke callback function with results after query has executed
          callback(error, null);

        } else {

          // invoke callback function with results after query has executed
          if (queryResult.rows.length > 0) {
            // console.log(queryResult.rows);
            callback(null, queryResult.rows);
          } else {
            callback(null, null);

          }
        }
      });
    }
  };

  let login = (dataIn, callback) => {
    var username = dataIn.username;
    var password = dataIn.password;
    password = sha256(password);

    let query = 'SELECT * FROM userdb WHERE username = $1';
    const values = [username];
    dbPoolInstance.query(query, values, (error, queryResult) => {
      if (error) {

        // invoke callback function with results after query has executed
        callback(error, null);

      } else {

        // invoke callback function with results after query has executed
        if (queryResult.rows.length > 0) {
          var result = queryResult.rows[0];
          var checkPass = result.password;
          if (checkPass == password) {
            callback(null, result);
          }
          // console.log(queryResult.rows);

        } else {
          callback(null, null);

        }
      }
    });


  };

  let makePost = (dataIn, callback) => {
    var userid = dataIn.userid;
    var tweetbody = dataIn.message;
    var tags = dataIn.hashtag;
    // console.log(Array.isArray(tags));
    
    if(!Array.isArray(tags)){
      tags = [tags];
    }
    console.log(tags);
    
      let query = 'INSERT INTO tweetDb (userid, tweetbody, tags, postdate) VALUES ($1,$2, $3, current_timestamp) RETURNING tweetid';
      const values = [userid,tweetbody,tags];
      dbPoolInstance.query(query, values, (error, queryResult) => {
        if (error) {

          // invoke callback function with results after query has executed
          callback(error, null);

        } else {

          // invoke callback function with results after query has executed
          if (queryResult.rows.length > 0) {
              callback(null, queryResult.rows);
            
            // console.log(queryResult.rows);

          } else {
            callback(null, null);

          }
        }
      });

      
        
  };

  let getTweets = (callback) => {

    let query
      = `SELECT * FROM tweetdb
      INNER JOIN userdb ON (tweetdb.userid = userdb.userid)       
      ORDER BY tweetdb.tweetid DESC
      `;
    dbPoolInstance.query(query, (error, queryResult) => {
      if (error) {

        // invoke callback function with results after query has executed
        callback(error, null);

      } else {

        // invoke callback function with results after query has executed
        if (queryResult.rows.length > 0) {
          // console.log(queryResult.rows);
          callback(null, queryResult.rows);

          // console.log(queryResult.rows);

        } else {
          callback(null, null);

        }
      }
    });
  }

  let addTag = (dataIn, callback) => {
    var hashtag = "#" + dataIn.hashtag;

    let query = 'INSERT INTO tagdb (tagtext) VALUES ($1)';
    const values = [hashtag];
    dbPoolInstance.query(query, values, (error, queryResult) => {
      if (error) {

        // invoke callback function with results after query has executed
        callback(error, null);

      } else {
        // invoke callback function with results after query has executed
        if (queryResult.rows.length > 0) {
          callback(null, queryResult.rows);

          // console.log(queryResult.rows);

        } else {
          callback(null, null);

        }
      }
    });
  };
  let getTags = (callback) => {

    let query
      = `SELECT * FROM tagdb`;
    dbPoolInstance.query(query, (error, queryResult) => {
      if (error) {

        // invoke callback function with results after query has executed
        callback(error, null);

      } else {

        // invoke callback function with results after query has executed
        if (queryResult.rows.length > 0) {
          // console.log(queryResult.rows);
          callback(null, queryResult.rows);

          // console.log(queryResult.rows);

        } else {
          callback(null, null);

        }
      }
    });
  };
  let addFav = (dataIn, callback) => {
    var userid = dataIn.userid;
    var tweetid = dataIn.tweetid;


    let query = 'INSERT INTO favtweet (user_id, tweed_id) VALUES ($1, $2)';
    const values = [userid, tweetid];
    dbPoolInstance.query(query, values, (error, queryResult) => {
      if (error) {

        // invoke callback function with results after query has executed
        callback(error, null);

      } else {
        // invoke callback function with results after query has executed
        if (queryResult.rows.length > 0) {
          callback(null, queryResult.rows);

          // console.log(queryResult.rows);

        } else {
          callback(null, null);

        }
      }
    });
  };
  return {
    getAll,
    signup,
    login,
    makePost,
    getTweets,
    addTag,
    getTags,
    addFav
  };
};
