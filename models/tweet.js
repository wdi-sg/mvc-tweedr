/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let tweet = (name, callback) => {
   let data = [name.username];
    let user_id="";
    let tweet_id="";
    //let query = 'INSERT into users (name, password) VALUES ($1, $2)';
  /*  let query = 'SELECT * from users WHERE name = ($1)';

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
    });*/
///hashing

   console.log("Beep Beep Beep");
    console.log(name);
    let exisitingHashIdArray=name.hashid;
    let newHashArray=[];
    newHashArray=name.newHash.split(" ");
    console.log(newHashArray)
    let hashquery = 'INSERT into hash (hashtext) VALUES'
    for (let hashCount=0; hashCount<newHashArray.length; hashCount++)
    {
        hashquery += ` ($${hashCount + 1}), `;
    }
    hashquery= hashquery.slice(0,-1);
    hashquery= hashquery.slice(0,-1);
    hashquery += 'RETURNING id';
    console.log(hashquery);
dbPoolInstance.query(hashquery, newHashArray, (error, queryNewHashResult) => {
                                  if( error ){
                                    console.log("Error")
                                    console.log(error);
                                            // invoke callback function with results after query has executed
                                    callback(error, null);

                                  }else{

                                    // invoke callback function with results after query has executed


                                                  console.log("BOom Boom Boon Boon");

                                      //console.log(queryNewHashResult.rows);
                                      let newHashArrayOfObjects= queryNewHashResult.rows;
                                      console.log(newHashArrayOfObjects);
                                      console.log(exisitingHashIdArray);
                                      for (let hashCount=0; hashCount< newHashArrayOfObjects.length;hashCount++)
                                      {

                                        exisitingHashIdArray.push(newHashArrayOfObjects[hashCount].id);
                                      }
                                      console.log(exisitingHashIdArray);
                                      let query = 'SELECT * from users WHERE name = ($1)';
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


                                                                                      console.log("BOom Boom Boon Boon Bing Bon");

                                                                          console.log(queryInnerJoinResult.rows);
                                                                          //console.log(tweet_id);

                                                                          //////come here later


                                                                          let querytweetHashInner = 'INSERT into hash_tweets (tweets_id, hash_id) VALUES ';
                                                                          hashtweetarray=[tweet_id];
                                                                        for (let allhashCount=0; allhashCount<exisitingHashIdArray.length; allhashCount++)
                                                                        {
                                                                            querytweetHashInner += ` ($1, $${allhashCount + 2}), `;
                                                                            hashtweetarray.push(parseInt(exisitingHashIdArray[allhashCount]))
                                                                        }
                                                                        querytweetHashInner= querytweetHashInner.slice(0,-1);
                                                                        querytweetHashInner= querytweetHashInner.slice(0,-1);
                                                                        console.log(querytweetHashInner);
                                                                        console.log(hashtweetarray);
                                                                    dbPoolInstance.query(querytweetHashInner, hashtweetarray, (error, queryInnerJoinResult) => {
                                                                      if( error ){
                                                                        console.log("Error")
                                                                        console.log(error);
                                                                                // invoke callback function with results after query has executed
                                                                        callback(error, null);

                                                                      }else{

                                                                        // invoke callback function with results after query has executed

                                                                        if( queryResult.rows.length > 0 ){
                                                                                      console.log("BOom Boom Boon Boon Bing Bon");

                                                                          console.log(queryInnerJoinResult.rows);
                                                                          //console.log(tweet_id);
                                                                          callback(null, queryInnerJoinResult.rows);

                                                                        }else{
                                                                            console.log("Wrong User Entry")
                                                                          callback(null, null);

                                                                        }
                                                                      }
                                                                    });


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


                                  }
                                });



  };

  return {
    tweet:tweet,
  };
};