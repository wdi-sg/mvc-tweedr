/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
  // `dbPoolInstance` is accessible within this function scope
  const sha256 = require('js-sha256');
  const SALT = "bababanana";

//////SHOW ALL TWEETS//////
  let getAllTweetsData = (callback) => {
    let query = 'SELECT * FROM tweets';

    dbPoolInstance.query(query, (error, queryResult) => {
      if ( error ){
        // invoke callback function with results after query has executed
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed
        if ( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);
        } else {
          callback(null, null);
        }
      }
    });
  };
//////ADD NEW USER TO DB//////
  let addNewUser = (newUser, callback) => {
    //newUser defined in controller as request.body
    let hashedPassword = sha256(newUser.password + SALT);
    let newValues = [newUser.name, newUser.email, newUser.username, hashedPassword];

    const query = `INSERT INTO users (name, email, username, password) VALUES ($1, $2, $3, $4) RETURNING *`;

    dbPoolInstance.query(query, newValues, (error, queryResult) => {
        //console.log ("this is queryResult from models: ", queryResult);
        //console.log("this is queryResult.rows from models: ", queryResult.rows);
      if ( error ){
        callback(error, null);
      } else {
          if ( queryResult.rows.length > 0 ){
            callback(null, queryResult.rows);
          } else {
            callback(null, null);
          }
      }
    });
  };

//////FINDS USER IN DATABASE TO LOG IN//////
  let userLogIn = (user, callback) => {
    //user defined in controller as request.body
    //check database for this user
    const userValue = [user.username];
    const queryString = `SELECT * FROM users WHERE username = $1`;
    console.log("the user is " + userValue);

    dbPoolInstance.query(queryString, userValue, (error, queryResult) => {
      if ( error ){
        callback(error, null);
      } else {
          if ( queryResult.rows.length > 0 ){
            callback(null, queryResult.rows);
          } else {
            callback(null, null);
          }
      }
    });
  };

//////FIND USER IN DB TO SHOW CREATE TWEET/////
  let getUser = (user_id, callback) => {
    const userValue = [user_id];
    const queryString = `SELECT * FROM users WHERE id = $1`;

    dbPoolInstance.query(queryString, userValue, (error, queryResult) => {
      if ( error ){
        callback(error, null);
      } else {
          if ( queryResult.rows.length > 0 ){
            callback(null, queryResult.rows);
          } else {
            callback(null, null);
          }
      }
    });
  };

//////ADD THE NEW TWEET TO DATABASE/////
  let addTheTweet = (user_id, newTweet, callback) => {
    //newTweet defined in controller as request.body

    const thisUser = `SELECT * FROM users WHERE id = ${user_id}`;

    const newValues = [thisUser.id, thisUser.username, newTweet];
    const queryString = `INSERT INTO tweet (users_userid, users_username, content) VALUES ($1, $2, $3)`;

    dbPoolInstance.query(queryString, newValues, (error, queryResult) => {
      if ( error ){
        callback(error, null);
      } else {
          if ( queryResult.rows.length > 0 ){
            callback(null, queryResult.rows);
          } else {
            callback(null, null);
          }
      }
    });
  };


//CREATE NEW PAYMENT
let createPayment = (sender_id, recipient_id, amount, callback) => {

    let array = [sender_id, recipient_id, amount]
    let query = 'INSERT INTO payment (sender_id, recipient_id, amount) VALUES ($1, $2, $3)'

    dbPoolInstance.query(query, array, (error, queryResult) => {

        callback(queryResult.rows[0])

  });
};

//GET PAYMENT

let getPayment = (payment_id, callback) => {

        let query = `SELECT * FROM payment WHERE id= ${payment_id}`

    dbPoolInstance.query(query, (error, queryResult) => {

        callback(queryResult.rows[0])

  });
};

//GET SENT PAYMENTS (by user sending payment)

let getUserSentPayments = (sender_id, callback) => {

        let query = `SELECT * FROM payment WHERE sender_id= ${sender_id}`

    dbPoolInstance.query(query, (error, queryResult) => {

        callback(queryResult.rows[0])
    });
  };

//GET RECEIVED PAYMENTS

let getUserReceivedPayments =(recipient_id, callback) => {

        let query = `SELECT * FROM payment WHERE recipient_id= ${recipient_id}`

    dbPoolInstance.query(query, (error, queryResult) => {

        callback(queryResult.rows[0])
    });
  };



let getPaymentTotalByRecipient = (recipient_id, callback) => {

        let query = `SELECT SUM(amount) FROM payment WHERE recipient_id= ${recipient_id}`

    dbPoolInstance.query(query, (error, queryResult) => {

      callback(queryResult.rows[0])
  });
}

let getPaymentTotalBySender = (recipient_id, callback) => {

        let query = `SELECT SUM(amount) FROM payment WHERE sender_id= ${sender_id}`

    dbPoolInstance.query(query, (error, queryResult) => {

      callback(queryResult.rows[0])
  });
}












  return {
    getAllTweetsData,
    addNewUser,
    userLogIn,
    getUser,
    addTheTweet,
    createPayment,
    getPayment,
    getUserSentPayments,
    getUserReceivedPayments,
    getPaymentTotalByRecipient,
    getPaymentTotalBySender
  };
};