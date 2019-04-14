/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let writeTweed = (data, writeTweedCallback) => {

    let queryString = `SELECT * FROM users WHERE username='${data.username}';`;

    dbPoolInstance.query(queryString, (error, result) => {
      if (error) {

       console.log("tweed select query error", error);

      } else {

        // invoke callback function with results after query has executed
        console.log("tweed select result.rows: ");
        console.log(result.rows);

        let queryString = `INSERT INTO tweets (content, user_id) VALUES ('${data.content}', ${result.rows[0].id}) RETURNING *;`;

        dbPoolInstance.query(queryString, (error, result) => {
          if (error) {

           console.log("tweed insert query error", error);

          } else {

            // invoke callback function with results after query has executed
            console.log("tweed insert result.rows: ");
            console.log(result.rows);
            writeTweedCallback(result.rows);
          }

        });
      }
    });
  };

  return {
    tweedModelFunction : writeTweed
  };
};
