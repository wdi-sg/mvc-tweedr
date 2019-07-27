/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
    var sha256 = require('js-sha256');

  // `dbPoolInstance` is accessible within this function scope

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

  let getAllTweets = (callback) => {
    let query = 'SELECT * FROM tweets';

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
    console.log("MODEL QUERY", requestdata);
    let values = [requestdata.user, requestdata.password];
    console.log(values);

  }



  return {
    getAll,
    getAllTweets,
    login,
    signup
  };
};