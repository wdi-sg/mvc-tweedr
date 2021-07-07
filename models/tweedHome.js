/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
  // `dbPoolInstance` is accessible within this function scope
  let tweedHome = (callback) => {

    let text = "SELECT *,users.username FROM tweet INNER JOIN users ON (users.id = tweet.user_id;";

    dbPoolInstance.query(text,(error, result) => {
      if (error) {

       console.log("tweedHome query error", error);

      } else {
        // invoke callback function with results after query has executed
        console.log("home result.rows: ");
        console.log(result.rows);
        callback(result.rows);
      }
    });
  };
  return {
    tweedHomeModelsFunction:tweedHome
  };
};