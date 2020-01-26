/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
const sha256 = require('js-sha256')

module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let registerNewUser = (callback, data) => {

    const values = [data.name, sha256(data.password)]

    let query = 'INSERT INTO users (name, password) VALUES ($1, $2) RETURNING *';

    dbPoolInstance.query(query, values, (error, queryResult) => {
      if (error) {

        // invoke callback function with results after query has executed
        callback(error, null);

      } else {

        // invoke callback function with results after query has executed

        if (queryResult.rows.length > 0) {
          callback(null, queryResult.rows[0]);
        } else {
          callback(null, null);

        }
      }
    });
  };

  let loginUser = (callback, data) => {

    const values = [data.name]

    const password = sha256(data.password)

    const query = 'SELECT * FROM users WHERE name=$1'

    dbPoolInstance.query(query, values, (err, result) => {

      if (err) {
        callback(err, null)
      } else {

        if (result.rows.length > 0) {
          const user = result.rows[0]

          if (user.password === password) {
            callback(null, user)
          } else {
            callback(null, "no match!")
          }

        }
      }
    })
  }

  let showTweets = (callback, data) => {

    const query = "SELECT * FROM tweets"

    dbPoolInstance.query(query, (err, result) => {

      if (err) {
        callback(err, null)
      } else {

        if (result.rows.length > 0) {
          const tweets = result.rows[0]

          callback(null, tweets)

        }

      }

    })

  }

  return {
    registerNewUser,
    loginUser,
    showTweets
  };
};