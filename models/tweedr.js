/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let getUser = (userInput, callback) => {

    const inputValues = userInput;
    console.log("In models, inputValues: " + inputValues);

    // Why when I use $1 in this query, it can't read the actual input value??
    let query = "SELECT * FROM users WHERE username = $1";
    console.log("Query statement in models: ", query);

    dbPoolInstance.query(query, inputValues, (error, queryResult) => {

        if( error ){

            // invoke callback function with results after query has executed
            callback(error, null);

        }else{

            // invoke callback function with results after query has executed

            callback(null, queryResult.rows);

        }
    });

    /*let postTweet = (tweetInput, callback) => {
        const inputValues = [tweetInput];
        console.log("In models, inputValues: " + inputValues);

        const query = "INSERT INTO tweets (tweetContent, user_id) VALUES ($1, 1) RETURNING *";

        dbPoolInstance.query(query, (error, queryResult) => {
            if ( error ) {

                // invoke callback function with results after query has executed
                callback(error, null);

            } else {

                // invoke callback function with results after query has executed

                callback(null, queryResult.rows);
            }
        });
    };*/
  };

  return {
    getUser
    /*postTweet*/
  };
};
