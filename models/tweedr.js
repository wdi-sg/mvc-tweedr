const sha256 = require('js-sha256');
const SALT = "TwEeDr";

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let getAll = (callback) => {

    let query = 'SELECT * FROM users';

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
/////////////////////////////////////////////////////////////////////////////////////
let showTweeds = (tweedr, callback) => {
    const query = `SELECT * FROM tweeds`;
        dbPoolInstance.query(query, (err, queryResult) => {
            callback(err, queryResult);
        })
}

/////////////////////////////////////////////////////////////////////////////////////
let checkUser = (tweedr, callback) => {
        const query = `SELECT * FROM users WHERE username = '${tweedr.username}'`;

        dbPoolInstance.query(query, (err, queryResult) => {
            callback(err, queryResult);
        })
    }
/////////////////////////////////////////////////////////////////////////////////////
let createUser = (tweedr,callback) => {
    const password = sha256(tweedr.password + SALT);

    const query = `INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *`;
    const values = [tweedr.username, password];

    dbPoolInstance.query(query, values, (err, queryResult) => {
        callback(err, queryResult);
    })
}
/////////////////////////////////////////////////////////////////////////////////////
let login = (tweedr, callback) => {
        const password = sha256(tweedr.password + SALT);

        const query = `SELECT * FROM users WHERE username = '${tweedr.username}' AND password = '${password}'`;

        dbPoolInstance.query(query, (err, queryResult) => {
            callback(err, queryResult);
        });
    };
/////////////////////////////////////////////////////////////////////////////////////
let addTweedPost = (tweedr, callback) => {

   const query = `SELECT * FROM users WHERE username = '${tweedr.username}'`;

    dbPoolInstance.query(query, (err, userResult) => {
        const id = userResult.rows[0].id;

        const query2 = `INSERT INTO tweeds (tweed, createdby_user) VALUES ($1, $2) RETURNING id`;

        const values = [tweedr.tweed, id];

        dbPoolInstance.query(query2, values, (err, queryResult) => {
            callback(err, queryResult);
        })
    })
};
/////////////////////////////////////////////////////////////////////////////////////
let deleteTweedPost = (tweedr, callback) => {

   const query = `DELETE FROM tweeds WHERE id = '${tweedr}'`;

    dbPoolInstance.query(query, (err, queryResult) => {
            callback(err, queryResult);
    })
};
/////////////////////////////////////////////////////////////////////////////////////
let showMyTweeds = (username, callback) => {
    const query = `
                    SELECT tweed, tweeds.id
                    FROM tweeds
                    INNER JOIN users
                    ON tweeds.createdby_user = users.id
                    WHERE users.username = '${username}'
                    ORDER BY tweeds.id DESC`;
        dbPoolInstance.query(query, (err, queryResult) => {
            callback(err, queryResult);
        })
}




  return {
    getAll,

    showTweeds:showTweeds,

    checkUser:checkUser,
    createUser:createUser,

    login:login,

    addTweedPost:addTweedPost,
    deleteTweedPost:deleteTweedPost,

    showMyTweeds:showMyTweeds
  };
};
