/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope

    let getAllUsers = (callback) => {

        let queryString = 'SELECT * FROM users';

        dbPoolInstance.query(queryString, (error, result) => {
            if( error ){

                // invoke callback function with results after query has executed
                callback(error, null);

            } else{

                // invoke callback function with results after query has executed

                if( result.rows.length > 0 ){
                    callback(null, result.rows);

                } else{
                    callback(null, null);
                }
            }
        });
    };

    let createUser = (newUser, callback) => {


        let queryString = `INSERT INTO users (name, password) VALUES ($1, $2) RETURNING name`;
        let values = [
            newUser.name,
            newUser.password
          ];

        dbPoolInstance.query(queryString, values, (error, result) => {
            if( error ){
                // invoke callback function with results after query has executed
                callback(error, null);
            } else{
                // invoke callback function with results after query has executed

                if( result.rows.length > 0 ){
                    callback(null, result.rows[0]);

                } else{
                    callback(null, null);
                }
            }
        });
    };

  return {
    getAllUsers,
    createUser,
  };
};