/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
    var sha256 = require('js-sha256');

  // `dbPoolInstance` is accessible within this function scope
  //example
  let getAll = (callback) => {
    let query = 'SELECT * FROM pokemons';
    dbPoolInstance.query(query, (error, queryResult) => {
      if( error ){
        callback(error, null);
      }else if ( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);
        }else{
          callback(null, null);
        }
    });
  };
  //end example---------------------------

  let getAllTweets = (callback) => {
    // let query = 'SELECT * FROM tweets';

    //creates a merged table around tweets.userid = users.id
    let query = `SELECT users.id, * from tweets inner join users on (users.id = tweets.userid)`;
    dbPoolInstance.query(query, (err, result) => {
        if (err){
            callback(err, null);
        } else if (result.rows.length > 0){
            callback(null, result.rows);
        } else {
            callback(null, null);
        }
    })
  }

  let signup = (requestdata, callback) => {
    let hash = sha256(requestdata.password)
    let values = [requestdata.user, hash];
    // let query = `INSERT INTO users (name, password) VALUES ($1, $2) WHERE NOT EXISTS (SELECT * FROM users WHERE name = $1) RETURNING *`;

    let query = `INSERT INTO users (name, password) SELECT $1, $2 WHERE NOT EXISTS (SELECT * FROM users WHERE name = $1) RETURNING *`;

    dbPoolInstance.query(query, values, (err, result) => {
        if (err){
            callback(err, null);
            console.log(err);
        } else if (result.rows.length < 1){
            console.log("USER ALR EXISTS");
        } else if (result.rows.length > 0){
            callback(null, result.rows);
            console.log("Created: ", result.rows[0]);
        } else {
            callback(null, null);
        }
    })
  }

  let login = (requestdata, callback) => {
    let hash = sha256(requestdata.password);
    let values = [requestdata.user, hash];
    let query = `SELECT * FROM users WHERE name = $1 AND password = $2`;

    dbPoolInstance.query(query, values, (err, result) => {
        if (err){
            callback(err, null);
        } else if (result.rows.length < 1){
            console.log("Login failed.");
        } else if (result.rows.length = 1){
            callback(null, result.rows[0]);
            console.log(result.rows[0].name, "has logged in!")
        } else {
            callback(null, null);
        }
    })

  }

  let createTweet = (requestdata, callback) => {
    console.log("MODEL BODY: ", requestdata)
    let values = [requestdata.content, requestdata.userid];
    let query = `INSERT INTO tweets (content, userid) VALUES ($1, $2) RETURNING *`;

    dbPoolInstance.query(query, values, (err, result) => {
        if(err){
            callback(err, null);
        } else if (result.rows.length < 1){
            console.log("Failed to create tweet");
        } else if (result.rows.length = 1){
            callback(null, result.rows[0]);
            console.log("TWEET: ", result.rows[0]);
        } else {
            callback(null, null);
        }
    })

  }



  return {
    getAll,
    getAllTweets,
    login,
    signup,
    createTweet
  };
};