/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let allHash = (callback) => {
    console.log("Beep Beep Beep");
    //console.log(name);
    //let query = 'INSERT into users (name, password) VALUES ($1, $2)';
    let query = 'SELECT * from hash';
    //let data = [name.username];

    dbPoolInstance.query(query, (error, queryResult) => {
      if( error ){
        console.log("Error")
        console.log(error);
                // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed

        if( queryResult.rows.length > 0 ){
                      console.log("BOom Boom Boon Boon");
          callback(null, queryResult.rows);


        }else{
            console.log("Wrong User Entry")
          callback(null, null);

        }
      }
    });



  };


 let singleHash = (id, callback) => {
    console.log("Beep Beep Beep");
    console.log(id);
    //let query = 'INSERT into users (name, password) VALUES ($1, $2)';
    let query = 'SELECT * from hash WHERE id = ($1)';
    let outgoing = {};
    let data = [id];
    console.log(data);
    dbPoolInstance.query(query, data, (error, queryResult) => {
      if( error ){
        console.log("Error")
        console.log(error);
                // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed
        outgoing.text= queryResult.rows[0].hashtext;
        if( queryResult.rows.length > 0 ){
                      console.log("BOom Boom Boon Boon");
                let joinQuery = 'SELECT * from tweets INNER JOIN hash_tweets ON (hash_tweets.tweets_id = tweets.id) WHERE hash_id = ($1)';

                dbPoolInstance.query(joinQuery, data, (error, queryJoinResult) => {
                  if( error ){
                    console.log("Error")
                    console.log(error);
                            // invoke callback function with results after query has executed
                    callback(error, null);

                  }else{

                    // invoke callback function with results after query has executed
                    outgoing.tweet= queryJoinResult.rows;
                    if( queryResult.rows.length > 0 ){
                                  console.log("BOom Boom Boon Boon");
                      callback(null, outgoing);


                    }else{
                        console.log("Wrong User Entry")
                      callback(null, null);

                    }
                  }
                });


        }else{
            console.log("Wrong User Entry")
          callback(null, null);

        }
      }
    });



  };



  return {
    allHash:allHash,
    singleHash:singleHash,
  };
};