const SAUNA = 'pickles';
const sha256 = require('js-sha256');

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let getAllTweets = (data, doneWithQuery) => {

    let query = 'SELECT users.pic, users.name, tweets.message, tweets.photo_attached, tweets.created_at FROM tweets INNER JOIN users ON users.id = tweets.user_id';

    dbPoolInstance.query(query, (error, result) => {
      if ( error ) {
        console.log(error, null);
      } else {
        const allTweets = result.rows;
        doneWithQuery(allTweets);
      }
    });
  };

  let newUser = (data, doneWithQuery) => {

    let query = 'INSERT INTO users (name, password, pic) VALUES ($1, $2, $3)';
    let hash = sha256(data.password + SAUNA);
    let values = [data.name, hash, data.pic];

    dbPoolInstance.query(query, values, (error, result) => {
      if ( error ) {
        console.log(error, null);
      } else {
        const newUser = result.rows[0];
        doneWithQuery(newUser);
      }
    });
  };

  let logIn = (data, doneWithQuery) => {

    let query = "SELECT * FROM users WHERE name='" + data.name + "'";

    dbPoolInstance.query(query, (error, result) => {
      if ( error ) {
        console.log(error, null);
      } else {
        const user = result.rows[0];
        // console.log(user);
        doneWithQuery(user);
      }
    });
  };

  return {
    view: getAllTweets,
    registerComplete: newUser,
    logIn: logIn,
  };
};
