/**
* ===========================================
* Export model functions as a module
* ===========================================
*/
const sha256 = require('js-sha256');

module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let newUser = (formValues, callback) => {
    const username = formValues.username;
    const password = sha256(formValues.password);

    const values = [username, password];
    const query = 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING username, id';

    dbPoolInstance.query(query, values, (error, queryResult) => {
      if (error) {
        callback(error, null);
      } else {
        if (queryResult.rows.length > 0) {
          callback(null, queryResult.rows[0]);
        } else {
          callback(null, null);
        }
      }
    });
  };

  let login = (formValues, callback) => {
    const username = formValues.username;
    const password = sha256(formValues.password);

    let query = 'SELECT * FROM users WHERE username=$1';

    dbPoolInstance.query(query, [username], (error, queryResult) => {
      if (error) {
        callback(error, null);
      } else {
        if (queryResult.rows.length > 0) {
          const hash = queryResult.rows[0].password;

          if (password === hash) {
            callback(null, queryResult.rows[0]);
          }
        } else {
          callback(null, 'wrong username');
        }
      }
    });
  };

  return {
    newUser: newUser,
    login: login
  };
};