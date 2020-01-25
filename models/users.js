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

  const registerAccount = (username, password, callback) => {
    console.log('received username: ' + username);
    console.log('received password: ' + password);
    const hashedPassword = sha256(password + SALT);
    const queryString = `INSERT INTO users (username, hashedpassword) VALUES ($1, $2);`;
    const queryValues = [username, hashedPassword];
    dbPoolInstance.query(queryString, queryValues, callback);
  }

  return {
    signIn,
    registerAccount
  };
};
