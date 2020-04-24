/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let getTweet = (callback) => {
    let dataOutput={};
    let query = 'SELECT * FROM tweets';

    dbPoolInstance.query(query, (error, queryResult) => {
      if( error ){
        console.log("Error")
        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed

        if( queryResult.rows.length > 0 ){

            dataOutput.tweets= queryResult.rows;

              let hashquery = 'SELECT * FROM hash';

                dbPoolInstance.query(hashquery, (hasherror, queryhashResult) => {
                  if( hasherror ){
                    console.log("Error")
                    // invoke callback function with results after query has executed
                    callback(hasherror, null);

                  }else{

                    // invoke callback function with results after query has executed
console.log("BEeeeeeeeeee");


                        dataOutput.hash= queryhashResult.rows;
                        console.log(dataOutput);
                      callback(null, dataOutput);


                  }
                });

        }else{
          callback(null, null);

        }
      }
    });
  };

  return {
    getTweet:getTweet,
  };
};