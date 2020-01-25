/**
 * ===========================================
 * Modules required
 * ===========================================
 */

const sha256 = require('js-sha256');
const SALT = 'potatoTomatoHelloGoodbyeSleep';

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope
  const signIn = (username, password, callback) => {
    console.log('received username: ' + username);
    console.log('received password: ' + password);
    callback();
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
