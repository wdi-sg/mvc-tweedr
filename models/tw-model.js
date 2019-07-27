const sha256 = require('js-sha256');

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope

    let checkUserName = (user, callback) => {

        let queryString = 'SELECT * FROM users WHERE name = $1';
        let values = [user.name]

        dbPoolInstance.query(queryString, values, (error, result) => {

            if( error ){
                // invoke callback function with results after query has executed
                callback(error, null);

            } else{

                // invoke callback function with results after query has executed

                if( result.rows.length > 0 ){

                    if (sha256(user.password) === result.rows[0].password){
                        callback(null, result.rows[0]);
                    }
                    else {
                        callback(null, 'pass');
                    }

                } else{
                    callback(null, null);
                }

            }
        });
    };

    let checkUserId = (userId, callback) => {
        let queryString = 'SELECT * FROM users WHERE id = $1';
        let values = [userId]

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

    let createUser = (newUser, callback) => {

        let queryString = 'SELECT * FROM users';

        dbPoolInstance.query(queryString, (error, result) => {
            if ( error ){
                callback(error, null);
            } else if (newUser.name !== result.rows[0].name){

                let hashedPass = sha256(newUser.password);
                let queryString = `INSERT INTO users (name, password) VALUES ($1, $2) RETURNING id, name`;
                let values = [
                    newUser.name,
                    hashedPass
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
            } else {
                callback(null, 'taken');
            }
        });



    };

  return {
    checkUserName,
    checkUserId,
    createUser,
  };
};