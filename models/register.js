/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope
  
    let registerAll = (data, callback) => {
  
        const queryString = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *';
        

    //     dbPoolInstance.query(queryString, data, (err, result) => {
    //         if (err) {
    //             response.send('Query Error');
    //         } else {
    //             console.log('query results', result)
    //             response.send(result.rows);
    //         }
    // })


    //   let query = 'SELECT * FROM pokemons';
  
      dbPoolInstance.query(queryString, data, (error, queryResult) => {
        if( error ){
  
          // invoke callback function with results after query has executed
          // error with SQL query
          callback(error, null);
  
        }else{
          // if there is no error with SQL statement above or DB setup
          // invoke callback function with results after query has executed
  
          // if there is data inside queryResult.rows, for e.g. [{id: 1, name: John, email: }]
          if( queryResult.rows.length > 0 ){
            callback(null, queryResult.rows);
  
          }else{
            // if there is no data inside queryResult.rows, for e.g. []
            callback(null, null);
  
          }
        }
      });
    };
  
    return {
        registerAll,
    };
  };
  