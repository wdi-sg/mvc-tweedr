/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope
  
    let loginAll = (data, callback) => {
  
        const queryString = " SELECT * FROM users WHERE users.email = $1";
    
        // const queryString = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *';
        

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
          console.log("ITS AN ERRORRRRRR", error)
          callback(error, null);
  
        }else{
          // if there is no error with SQL statement above or DB setup
          // invoke callback function with results after query has executed
  
          // if there is data inside queryResult.rows, for e.g. [{id: 1, name: John, email: }]
          if( queryResult.rows.length > 0 ){
              console.log("this is banananananananaana", queryResult.rows)
            callback(null, queryResult.rows);
  
          }else{
            // if there is no data inside queryResult.rows, for e.g. []
            console.log("there is no dataaaaaaaaaaa bananana")
            callback(null, null);
  
          }
        }
      });
    };
  
    return {
        loginAll,
    };
  };
  