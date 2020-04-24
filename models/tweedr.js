/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope

    let getUsers = (callback) => {
        let query = 'SELECT * FROM users';
        dbPoolInstance.query(query, (error, queryResult) => {
          if( error ){
            // invoke callback function with results after query has executed
            callback(error, null);
          } else {
            callback(error, queryResult.rows);
            console.log(queryResult.rows);
          }
        });
    };

    let register = (result, data) => {
        let query = 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *';
        let values = [data.username, data.password];
        // console.log(values, "outside db pool");
        dbPoolInstance.query(query, values, (error, queryResult) => {
          if (error) {
            // invoke callback function with results after query has executed
            result(error, null);
            console.log(values, "GOT ERROR inside db pool");
            console.log(error, queryResult.rows)
          } else {
            // console.log(values, "NO ERROR inside db pool");
            result(error, queryResult.rows[0]);
            console.log(queryResult.rows[0].username);
          }
        });
    }

    return {
      register: register,
      getUsers: getUsers
    };
  };
  