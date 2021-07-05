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
let registerUser = (inputUsername, inputEmail, inputPwd, callback) => {

    /*const { name, email, password } = userRegistrationInfo;
    password = sha256(password);*/

    const inputValues = [inputUsername, inputEmail, inputPwd];

    let query = "INSERT INTO users (name, email, password) VALUES($1, $2, $3)";
    console.log(query);

    dbPoolInstance.query(query, inputValues, (error, queryResult) => {

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
let postTweet = (userId, tweed, callback) => {


    let query = 'INSERT INTO tweeds (user_id, post) VALUES ($1,$2)';

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
    tweets,
    postTweet,
    registerUser,
    loginUser
  };
};