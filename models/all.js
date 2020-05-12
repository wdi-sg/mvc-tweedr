/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
const sha256 = require('js-sha256');

 //pokemon template, changed to tweets
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope
//tweets
  let tweets = (callback) => {

    let query = 'SELECT post FROM tweets';

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




//register user
let registerUser = (callback, userRegistrationInfo) => {
    const { name, email, password } = userRegistrationInfo;
    password = sha256(password);

    let query = `INSERT INTO users (name, email, password) VALUES('${name}','${email}','${password}') RETURNING *`;

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

  //loginuser
let loginUser = (callback, userLoginInfo) => {
    const { name, email, password } = userLoginInfo;
    password = sha256(password);

    let query = "SELECT * from users WHERE name='" + requestUsername + "'";


    dbPoolInstance.query(query, (error, queryResult) => {
      if (error) {
        // invoke callback function with results after query has executed
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed
         if (result.rows.length > 0) {

                let hashedRequestPassword = sha256(requestPassword + SALT);
                console.log("hashed request password: " + hashedRequestPassword);

                // check to see if the password in request.body matches what's in the db
                //or hashedRequestPassword === requestPassword ?
                if (hashedRequestPassword === result.rows[0].password) {
                    let user_id = result.rows[0].id

                    let hashedCookie = sha256(SALT + user_id);

                    response.cookie('user_id', user_id);
                    response.cookie('hasLoggedIn', hashedCookie);

                    // if it matches they have been verified, log them in
                    response.send('about to log you in')

                } else {

                    response.status(403).send('wrong password');
                }


                //

            } else {
                response.status(403).send('wrong username');

            }
      }
    });
  };

//post tweet, insert into tweets
let postTweet = ( callback) => {



    // let query = 'INSERT INTO tweeds (user_id, post) VALUES ($1,$2)';
     let query = 'SELECT post FROM tweets';
     console.log(query);

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





//db.payments.getUserSentPayments( sender_id, (error, payments) => { ...
   let sentPayments = (request, callback) => {

        let query = 'SELECT * FROM payments WHERE sender_id=$1';
        dbPoolInstance.query(query, (error, queryResult)=>{
              if (err) {
                callback(err,null);
              } else {
                if (res.rows.length>0) {
                    callback(null,res.rows);
                } else {
                    callback(null,null);
                };
            };
        });
    };


// db.payments.getUserRecievedPayments( recipient_id, (error, payments) => { ...
    let receivedPayments = (request, callback) => {

        let query = 'SELECT * FROM payments WHERE recipient_id=$1';
        dbPoolInstance.query(query, (error, queryResult)=>{

              if (err) {
                callback(err,null);
              } else {
                if (res.rows.length>0) {
                    callback(null,res.rows);
                } else {
                    callback(null,null);
                };
            };
        });
    };


 // let postPayment = (request, callback) => {
 //         const { sender_id, recipient_id, amount } = paymentInfo;

 //      let query = 'SELECT * FROM payments WHERE sender_id=$1';
 //        dbPoolInstance.query(query, queryArr, (error, queryResult) => {
 //            if (error) {
 //                callback(error, null);
 //            } else {
 //                if (queryResult.rows.length > 0) {
 //                    callback(null, queryResult.rows);
 //                } else {
 //                    callback(null, null);
 //                }
 //            }
 //        });
 //

  return {
    tweets,
    postTweet,
    registerUser,
    loginUser,
    sentPayments,
    receivedPayments
  };
};