/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let getAll = (user_id, callback) => {

    let query = "SELECT DISTINCT username, users.id, users.image, tweed, tweeds.created_at, tweeds.id FROM tweeds INNER JOIN users ON (users.id = tweeds.users_id) INNER JOIN followers ON (followers.followers_user_id = tweeds.users_id) WHERE followers.user_id = "+user_id+" OR users_id = "+user_id+" ORDER by tweeds.id DESC"


    // "SELECT username, users.id, users.image, tweed, tweeds.id FROM tweeds INNER JOIN users ON (users.id = tweeds.users_id) WHERE users.id = "+user_id+" ORDER by tweeds.id DESC;";

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



  let getUsers = (callback) => {

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



  let registeringUsers = (username, hashedPassword, image, callback) => {

    let inputValues = [username, hashedPassword, image];
    console.log(inputValues);

    let query = 'WITH newUser as (INSERT INTO users (username, password, image) VALUES ($1, $2, $3) RETURNING *) INSERT INTO followers (followers_user_id) VALUES ((SELECT id from newUser)) RETURNING *';

    dbPoolInstance.query(query, inputValues, (error, queryResult) => {
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


  let loginUsers = (requestUsername, callback) => {

    let query = "SELECT * FROM users WHERE username = '" +requestUsername+"'";

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


  let addTweeds = (requestTweed, requestUserID, callback) => {

    let inputValues = [requestTweed, requestUserID];

    let query = "INSERT INTO tweeds (tweed, users_id) VALUES ($1, $2)";

    dbPoolInstance.query(query, inputValues, (error, queryResult) => {
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



  let getUser = (requestUser, callback) => {

    let query = "SELECT * FROM users WHERE username LIKE '" +requestUser+"%'";

    dbPoolInstance.query(query, (error, queryResult) => {
        console.log("queryResult below:")
        console.log(queryResult);
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


  let getAllUsers = (user_id, callback) => {

    let query = "SELECT * FROM users WHERE users.id != " + user_id;

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



  let followYou = (user_id, callback) => {

    let query = "SELECT username, users.id, users.image, followers.user_id FROM followers INNER JOIN users ON (users.id = followers.user_id) WHERE followers.followers_user_id =" +user_id;

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



  let getFollowers = (user_id, callback) => {

    let query = "SELECT username, users.id, users.image, followers.user_id FROM followers INNER JOIN users ON (users.id = followers.followers_user_id) WHERE followers.user_id = " +user_id;

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



  let addingFollowers = (user_id, followUserId, callback) => {

    let inputValues = [user_id, followUserId];

    let query = "INSERT INTO followers (user_id, followers_user_id) SELECT ($1), ($2) WHERE NOT EXISTS (SELECT * FROM followers WHERE user_id=($1) AND followers_user_id=($2)) RETURNING *";

    dbPoolInstance.query(query, inputValues, (error, queryResult) => {
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


  let showProfilePic = (userID, callback) => {

    let query = "SELECT * FROM users WHERE users.id = " + userID;

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



  let changeProfilePic = (userID, image, callback) => {

    let inputValues = [image, userID];

    let query = "UPDATE users SET image = ($1) WHERE users.id = ($2)";

    dbPoolInstance.query(query, inputValues, (error, queryResult) => {
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

  // THIS WILL INSERT A ROW INTO PAYMENTS WITH THE DETAILS OF THE TRANSACTION AND RETURN THE ROW 
  let getUserSentPayments = (sender_id, recipient_id, amount, callback) => {
    let inputValues = [sender_id, recipient_id, amount]
    let query = "INSERT INTO payments (sender_id, recipient_id, amount) VALUES ($1, $2, $3)"
   
    dbPoolInstance.query(query, inputValues, (error, queryResult) => {
      if( error ){
        callback(error, null);
      }else{
        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows[0]);

          /*The queryREsult.rows[0] will look like this
          {
            sender_id: 2,
            recipientid: 4,
            amount: 1600
          }
          */

        }else{
          callback(null, null);

        }
      }
    });
  }



// THIS WILL SELECT ALL THE ROWS WITH THE RECIPIENT ID AND RETURN THE AMOUNT RECIEVED AND ADD THEM UP.
  let getPaymentTotalByRecipient = (recipient_id, callback) => {
    let inputValues = [recipient_id];
    let query = "SELECT payments.amount, users.username FROM payments INNER JOIN users ON  (payments.recipient_id = users.id) WHERE recipient_id = $1"
    dbPoolInstance.query(query, inputValues, (error, queryResult) => {
      if( error ){
        callback(error, null);
      }else{
        if( queryResult.rows.length > 0 ){
          // I DID THE SUM OF THE ARRAY HERE SO NO NEED TO DO ON YOUR SIDE
          let totalarr = queryResult.rows.map(item => {
            return item.amount
          })
          let total = totalarr.reduce((a, b) => a + b, 0)
          const result = {
            recipientUsername: queryResult.rows[0].username,
            totalAmountRecieved: total
          }
          callback(null, result);
          /*The total will just be a whole number */
        }else{
          callback(null, null);

        }
      }
    });
  }

  // THIS WILL SELECT ALL THE ROWS WITH THE SENDER ID AND RETURN THE AMOUNT RECIEVED AND ADD THEM UP.
  let getPaymentTotalBySender = (sender_id, callback) => {
    let inputValues = [sender_id];
    let query = "SELECT payments.amount, users.username FROM payments INNER JOIN users ON  (payments.sender_id = users.id) WHERE sender_id = $1"
    dbPoolInstance.query(query, inputValues, (error, queryResult) => {
      if( error ){
        callback(error, null);
      }else{
        if( queryResult.rows.length > 0 ){
          // I DID THE SUM OF THE ARRAY HERE SO NO NEED TO DO ON YOUR SIDE
          let totalarr = queryResult.rows.map(item => {
            return item.amount
          })
          let total = totalarr.reduce((a, b) => a + b, 0)
          const result = {
            senderUsername: queryResult.rows[0].username,
            totalAmountSent: total
          }
          callback(null, result);
          /*The total will just be a whole number */
        }else{
          callback(null, null);

        }
      }
    });
  }







  return {
    getAll,
    getUsers,
    registeringUsers,
    loginUsers,
    addTweeds,
    getUser,
    getAllUsers,
    followYou,
    getFollowers,
    addingFollowers,
    showProfilePic,
    changeProfilePic,
    getUserSentPayments,
    getPaymentTotalByRecipient,
    getPaymentTotalBySender
  };
};