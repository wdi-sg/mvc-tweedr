/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let getTweed = (data, getTweedCallback) => {

    // let queryString = `SELECT *, tweets.content FROM users INNER JOIN followers ON (users.id=followers.user_id) INNER JOIN tweets ON (followers.follower_id=tweets.user_id) WHERE username='${data.username}';`;
    let queryString = `SELECT id FROM users WHERE username='${data.username}';`;

    dbPoolInstance.query(queryString, (error, result) => {
      if (error) {

       console.log("getTweed select query error", error);

      } else {

        let queryString = `SELECT * FROM tweets INNER JOIN followers ON (tweets.user_id=followers.user_id) INNER JOIN users ON (users.id= followers.user_id) WHERE followers.follower_id='${result.rows[0].id}';`;

        dbPoolInstance.query(queryString, (error, result) => {
          if (error) {

           console.log("getTweed select query error", error);

          } else {

            // invoke callback function with results after query has executed
            console.log("getTweed select result.rows: ");
            console.log(result.rows);

            getTweedCallback(result.rows);

          }
        });
      }
    });
  };

  let writeTweed = (data, writeTweedCallback) => {

    let queryString = `SELECT * FROM users WHERE username='${data.username}';`;

    dbPoolInstance.query(queryString, (error, result) => {
      if (error) {

       console.log("writeTweed select query error", error);

      } else {

        // invoke callback function with results after query has executed
        console.log("writeTweed select result.rows: ");
        console.log(result.rows);

        let queryString = `INSERT INTO tweets (content, user_id) VALUES ('${data.content}', '${result.rows[0].id}') RETURNING *;`;

        dbPoolInstance.query(queryString, (error, result) => {
          if (error) {

           console.log("writeTweed insert query error", error);

          } else {

            // invoke callback function with results after query has executed
            console.log("writeTweed insert result.rows: ");
            console.log(result.rows);
            writeTweedCallback(result.rows);
          }

        });
      }
    });
  };

  return {
    writeTweedModelFunction : writeTweed,
    getTweedModelFunction : getTweed
  };
};
