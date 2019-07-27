/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  // ===========================================
  //home path

    let getAll = (callback) => {

        let query = 'SELECT * FROM tweets';

        dbPoolInstance.query(query, (error, queryResult) => {
            if( error ){

                // invoke callback function with results after query has executed
                callback(error, null);

            }else{

                // invoke callback function with results after query has executed

                if( queryResult.rows.length > 0 ){
                    callback(null, queryResult.rows);

                }else{
                    callback(null, null);
                }
            }
        });
    };

    // ===========================================

    let postRegister = (value, callback) => {

        let query = 'INSERT INTO users (name, password) VALUES ($1, $2)RETURNING *';

        let values = [value.name, value.password];

        dbPoolInstance.query(query, values, (error, queryResult) => {
            if( error ){

                // invoke callback function with results after query has executed
                callback(error, null);

            }else{

                // invoke callback function with results after query has executed

                if( queryResult.rows.length > 0 ){
                    callback(null, queryResult.rows);

                }else{
                    callback(null, null);
                }
            }
        });


    };

  // ===========================================
  //register path
  // ===========================================

  return {
    getAll,
    postRegister
  };
};