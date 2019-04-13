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

  return {
    view: getAllTweets,
  };
};
