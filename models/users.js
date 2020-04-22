// Export model functions as a module
const sha256 = require('js-sha256');
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  const registerAccount = (name, password, callback) => {

     //const hashedPassword = sha256(password);
     const queryString = `INSERT INTO users (name, password) VALUES ($1, $2)`;
     const queryValues = [name, password];
     dbPoolInstance.query(queryString, queryValues, callback);
   }
   let loginUser = (name, password, callback) => {
     console.log('received username: ' + name);
     console.log('received password: ' + password);
     callback();
   }


  return {
    registerAccount,
    loginUser
  };
};