/**
 * ===========================================
 * Modules required
 * ===========================================
 */

const sha256 = require('js-sha256');
const SALT = 'potatoTomatoHelloGoodbyeSleep';
const SESSION_LENGTH_TIME = 1210000000; // 2 weeks

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // verify if user is signed in, if so, perform the callback.
  const verifyUserSignedIn = () => {
    console.log('checking if user is signed in');
  }


  const createLoggedInToken = (id, username, loggedInCallback) => {
    console.log('making session');
    const timeNow = new Date();
    const loginToken = sha256(id + timeNow + SALT);
    const expiryDate = new Date() + SESSION_LENGTH_TIME;
    const queryString = 'INSERT INTO sessions (token, user_id, expiry) VALUES ($1, $2, $3) RETURNING *;';
    const queryValues = [loginToken, id, expiryDate];
    console.log(queryValues);
    dbPoolInstance.query(queryString, queryValues, (err, result) => {
      if (err) {

      } else {
      console.log('Session token created');
      loggedInCallback(loginToken, user_id, expiry);
    }
    });
  };

  // `dbPoolInstance` is accessible within this function scope
  const signIn = (username, password, callback) => {
    const hashedPassword = sha256(password + SALT);
    const queryString = 'SELECT * FROM users WHERE username = $1 AND hashedpassword = $2';
    const queryValues = [username, hashedPassword];
    dbPoolInstance.query(queryString, queryValues, (err, result) => {
      if (err) {
        console.log('Error', err);
      } else {
        console.log('user logged in');
        createLoggedInToken(result.rows.id, result.rows.username, callback);
      }
    })
  }

  const checkUniqueUsername = (username, callback) => {
    const queryString = 'SELECT * FROM users WHERE username = $1;';
    const queryValues = [username];
    dbPoolInstance.query(queryString, queryValues, callback);
  }

  const registerAccount = (username, password, usernameRegistrationCallback) => {
    console.log('received username: ' + username);
    console.log('received password: ' + password);

    const checkUniqueUserNameCallback = (err, result) => {
      if (err) {
        console.log('Error whoopsie doopsie', err);
      } else {
        if (result.rows.length === 0) {
          const hashedPassword = sha256(password + SALT);
          const queryString = `INSERT INTO users (username, hashedpassword) VALUES ($1, $2);`;
          const queryValues = [username, hashedPassword];
          dbPoolInstance.query(queryString, queryValues, usernameRegistrationCallback);
        } else {
          console.log('username already taken!');
        }
      }
    }

    checkUniqueUsername(username, checkUniqueUserNameCallback);

  }

  return {
    signIn,
    registerAccount
  };
};
