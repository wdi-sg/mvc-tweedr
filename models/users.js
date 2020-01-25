/**
 * ===========================================
 * Modules required
 * ===========================================
 */


/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope


  let signIn = (username, password, callback) => {
    console.log('received username: ' + username);
    console.log('received password: ' + password);
    callback();
  }

  return {
    signIn,
  };
};
