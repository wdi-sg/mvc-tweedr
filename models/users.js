/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
const SALT = 'hs98q0f%323#ehqiw234@';
const sha256 = require('js-sha256');

// `dbPoolInstance` is accessible within this function scope
module.exports = (dbPoolInstance) => {

//Save register info into the table users
  let registerInfo = (data, doneWithQuery) => {
    // console.log("register in users.js");
    // console.log("Im data"+ data);
    let hash = sha256(data.password + SALT);
    let query = "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *"
    const values = [data.name, hash];

    dbPoolInstance.query(query, values, (err, result) => {

      if(err) {
        console.log("ERROR", err);
      } else {
        // console.log("Done with query! I'm inside MODEL");
        // console.log("I'm " + result.rows[0]);
        const createdUser = result.rows[0];
        doneWithQuery(createdUser);
      }
    });
  };


//Save the new tweet that user typed in into the table tweets
  let addNewTweet = (data, doneWithQuery) => {
    let query = 'INSERT INTO tweets (tweet) VALUES ($1) RETURNING *'
    const values = [data.tweet];

    dbPoolInstance.query(query, values, (err, result) => {

        if(!err) {
            const createdTweet = result.rows[0];
            doneWithQuery(createdTweet);
        } else {
            console.log("ERROR", err);
        }
    });
  };


//Collect all tweets in order to show in the home screen
  let getAllTweet = (callback) => {
    let query = 'SELECT * FROM tweets';
    dbPoolInstance.query(query, (error, queryResult) => {
      if(error){
        // invoke callback function with results after query has executed
        callback(error, null);
    } else {
        // invoke exports = callback function with results after query has executed
        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);
        } else {
          callback(null, null);
        }
      }
    });
  };



//++++++++++need to fix this+++++++++++//
//Authenticate the user
  let authenticateLogin = (data, verifiedUser, callback) => {

    let query = "SELECT * FROM users WHERE username=" + data.username;

    dbPoolInstance.query(query, (err, result) => {

        if(error){
        callback(error, null);

    } else {

        if(result.rows.length >= 1){
            const verifiedUser = result.rows[0];
            let hash = sha256(data.password + SALT);
            callback(null, queryResult.rows);

            if(hash === verifiedUser.password) {
                let auth = true;
                let hash = sha256(verifiedUser.name + SALT);
                doneWithQuery(verifiedUser, auth);

            } else {
                auth = false;
                doneWithQuery(verifiedUser, auth);
            }

        } else {
            auth = false;
            doneWithQuery(verifiedUser, auth);
            callback(null, null);
        }
      }
    });
  };


// let authenticateLogin = (data, verifiedUser) => {

//     let query = "SELECT * FROM users WHERE username=" + data.username;

//     dbPoolInstance.query(query, (err, result) => {

//         if(result.rows.length >= 1) {
//             const verifiedUser = result.rows[0];
//             let hash = sha256(data.password + SALT);

//             if(hash === verifiedUser.password) {
//                 let auth = true;
//                 let hash = sha256(verifiedUser.name + SALT);
//                 doneWithQuery(verifiedUser, auth);

//             } else {
//                 auth = false;
//                 doneWithQuery(verifiedUser, auth);
//             }
//         } else {
//             auth = false;
//             doneWithQuery(verifiedUser, auth);
//         }

//     });
//   };
















  return {
    register: registerInfo,
    login: authenticateLogin,
    newTweet: addNewTweet,
    allTweet: getAllTweet
  };
};