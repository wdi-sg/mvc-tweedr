/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

    let getAll = (callback) => {

        let query = 'SELECT * FROM pokemons';

        dbPoolInstance.query(query, (error, queryResult) => {
            if( error ){

            // invoke callback function with results after query has executed
            callback(error, null);

            }
            else{

                // invoke callback function with results after query has executed

                if( queryResult.rows.length > 0 ){
                  callback(null, queryResult.rows);

                }
                else{
                    callback(null, null);

                }
            }
        });
    };

    let getOne = (data,callback) => {
        let query = 'SELECT name, password FROM users WHERE name=$1 AND password=$2';
        let values = [data.name, data.password];
        // console.log(data.name);
        // console.log(data.password);
        // console.log(values);
        dbPoolInstance.query(query, values, (error, queryResult) => {
            if( error ){
            // invoke callback function with results after query has executed
            callback(error, null);
            }
            else{
                // invoke callback function with results after query has executed
                // console.log(data);
                // console.log(queryResult.rows[0]);
                if( data.name === queryResult.rows[0].name && data.password === queryResult.rows[0].password ){
                    callback(null, queryResult.rows[0]);
                }
                else{
                    callback(null, null);
                }
            }
        });
    };

    let newOne = (data,callback) => {
        let query = 'SELECT name FROM users WHERE name=$1';
        let values = [data.name]
        dbPoolInstance.query(query, values, (error, queryResult) => {
            if( error ){
            // invoke callback function with results after query has executed
            callback(error, null);
            }
            else{
                // invoke callback function with results after query has executed
                if( queryResult.rows.length > 0 ){
                  callback(null, queryResult.rows);
                }
                else{
                    let newQuery = 'insert into users (name, password) values($1, $2)';
                    values.push(data.password);
                    console.log(values);
                    dbPoolInstance.query(newQuery, values,(error,queryResult)=>{
                        if(error){
                            callback(error,null);
                        }
                        else{
                            callback(null,queryResult.rows)
                        }
                    });
                }
            }
        });
    };

  return {
    getAll,
    getOne,
    newOne
  };
};