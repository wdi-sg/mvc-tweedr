/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */

module.exports = (dbPoolInstance) => {

    let newUser = (data, callback) => {

      let query = `INSERT INTO users (username, password, profile_img) VALUES ('${data.username}', '${data.password}', '${data.profile_img}')`;

        dbPoolInstance.query(query, (error, queryResult) => {
          if (error) {
            callback (error, null);
          } else {
            if (queryResult.rows.length > 0) {
              callback (null, queryResult.rows);
            } else {
              callback (null, null);
            }
          }
        });
    };

    return {
        newUser,
    };
};