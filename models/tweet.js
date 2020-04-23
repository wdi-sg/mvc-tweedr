/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let tweet = (name, callback) => {
    console.log("Beep Beep Beep");
    console.log(name);
    //let query = 'INSERT into users (name, password) VALUES ($1, $2)';
    let query = 'SELECT * from users WHERE name = ($1)';
    let data = [name.username];
    let user_id="";
    let tweet_id="";
    dbPoolInstance.query(query, data, (error, queryResult) => {
      if( error ){
        console.log("Error")
        console.log(error);
                // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed

        if( queryResult.rows.length > 0 ){
                      console.log("BOom Boom Boon Boon");
          user_id= parseInt(queryResult.rows[0].id);
          console.log("user id is "+ user_id);
          //let queryInner = 'SELECT * from users_followers';
          let queryInner = 'INSERT into tweets (tweetstext) VALUES ($1) RETURNING id';
          let innerData =[name.tweet];

              dbPoolInstance.query(queryInner, innerData, (error, queryInnerResult) => {
                              if( error ){
                                console.log("Error")
                                console.log(error);
                                        // invoke callback function with results after query has executed
                                callback(error, null);

                              }else{

                                // invoke callback function with results after query has executed

                                if( queryResult.rows.length > 0 ){
                                              console.log("BOom Boom Boon Boon");

                                  tweet_id= parseInt(queryInnerResult.rows[0].id);
                                console.log("tweet_id is"+tweet_id);
                                console.log("user id is "+ user_id);
                                //let queryJoinInner = 'SELECT * from users_tweets';
                                let queryJoinInner = 'INSERT into users_tweets (user_id, tweets_id) VALUES ($1, $2)';
                                let innerJoinData =[user_id, tweet_id];
                                dbPoolInstance.query(queryJoinInner, innerJoinData, (error, queryInnerJoinResult) => {
                                  if( error ){
                                    console.log("Error")
                                    console.log(error);
                                            // invoke callback function with results after query has executed
                                    callback(error, null);

                                  }else{

                                    // invoke callback function with results after query has executed

                                    if( queryResult.rows.length > 0 ){
                                                  console.log("BOom Boom Boon Boon");

                                      console.log(queryInnerJoinResult.rows);
                                      //console.log(tweet_id);
                                      callback(null, queryInnerJoinResult.rows);

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

        }else{
            console.log("Wrong User Entry")
          callback(null, null);

        }
      }
    });
  };

  return {
    tweet:tweet,
  };
};