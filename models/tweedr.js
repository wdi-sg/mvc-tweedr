/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  const getUser = (userInput, callback) => {

    const inputValues = [userInput];
    console.log("In models, inputValues: " + inputValues);

    // Why when I use $1 in this query, it can't read the actual input value??
    let query = "SELECT * FROM users WHERE username = '" + inputValues + "'";
    console.log("Query statement in models: ", query);

    dbPoolInstance.query(query, (error, queryResult) => {

        if( error ){

            // invoke callback function with results after query has executed
            callback(error, null);

        }else{

            // invoke callback function with results after query has executed

            if( queryResult.rows.length > 0 ){
              callback(null, queryResult.rows);

            }else{
              callback(null, queryResult.rows);

            }
        }
    });
  };

  return {
    getUser
  };
};
