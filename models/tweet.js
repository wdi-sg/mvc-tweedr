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

///hashing
    let counterCheckHash=[];
   console.log("Beep Beep Beep");
    console.log(name);
    let exisitingHashIdArray=[]
    if(typeof name.hashid==="object"){
        exisitingHashIdArray=name.hashid
        }
        else{
            exisitingHashIdArray=[name.hashid];
        }
    let newHashArray=[];
    newHashArray=name.newHash.split(" ");
    const uniqueSet = new Set(newHashArray);
    newHashArray =[...uniqueSet];
    console.log(newHashArray)


let checkHashQuery= 'SELECT * FROM hash';
 dbPoolInstance.query(checkHashQuery, (error, queryHashCheckResult) =>
    {
      if( error ){
        console.log("Error")
        console.log(error);
                // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed

        if( queryHashCheckResult.rows.length > 0 ){
                      console.log("BOom Boom Boon Boon Bing Bon");
            counterCheckHash= queryHashCheckResult.rows;
          console.log(counterCheckHash);
          //console.log(tweet_id);
          for(let checkCount=0; checkCount<counterCheckHash.length; checkCount++)
          {
            for(let newHashCount=newHashArray.length-1;newHashCount>=0;newHashCount--)
            {
                if(counterCheckHash[checkCount].hashtext===newHashArray[newHashCount])
                {
                    console.log(exisitingHashIdArray);
                    exisitingHashIdArray.push(counterCheckHash[checkCount].id);
                    newHashArray.pop();
                }
            }
          }
          for(let existingcount=0; existingcount<exisitingHashIdArray.length;existingcount++)
          {
            exisitingHashIdArray[existingcount]= parseInt(exisitingHashIdArray[existingcount]);
          }
          const uniqueNumberSet = new Set(exisitingHashIdArray);
          exisitingHashIdArray =[...uniqueNumberSet];
          console.log("BEEEEEEEEEE BEEEEEEEEEE");
          console.log(newHashArray);
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

        }else{
            console.log("Wrong User Entry")
          callback(null, null);

        }
      }
    });




  };
  let alltweet = (callback) => {
    console.log("Beep Beep Beep");
    //console.log(name);
    //let query = 'INSERT into users (name, password) VALUES ($1, $2)';
    let query = 'SELECT * from tweets';
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

    let onetweet = (id, callback) => {
    console.log("Beep Two");
    //console.log(name);
    //let query = 'INSERT into users (name, password) VALUES ($1, $2)';

    let query = 'SELECT * from tweets WHERE id = ($1)';
    console.log(id);
    let data = [id];
    let outgoingData={};
    console.log(data);
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
                      outgoingData.tweets= queryResult.rows[0];
                      let userQuery='SELECT * from users INNER JOIN users_tweets ON (users_tweets.user_id = users.id) WHERE users_tweets.tweets_id = ($1)';
                dbPoolInstance.query(userQuery, data, (error, queryResult) => {
                  if( error ){
                    console.log("Error")
                    console.log(error);
                            // invoke callback function with results after query has executed
                    callback(error, null);

                  }else{

                    // invoke callback function with results after query has executed


                                  console.log("BOom Boom Boon Boon");
                                  outgoingData.users= queryResult.rows;
                                    let userQuery='SELECT * from hash INNER JOIN hash_tweets ON (hash_tweets.hash_id = hash.id) WHERE hash_tweets.tweets_id = ($1)';
                                        dbPoolInstance.query(userQuery, data, (error, queryResult) => {
                                          if( error ){
                                            console.log("Error")
                                            console.log(error);
                                                    // invoke callback function with results after query has executed
                                            callback(error, null);

                                          }else{

                                            // invoke callback function with results after query has executed


                                                          console.log("BOom Boom Boon Boon Wreck Wreck");
                                                          outgoingData.hash= queryResult.rows;
                                              callback(null, outgoingData);



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

  };
  return {
    tweet:tweet,
    alltweet:alltweet,
    onetweet:onetweet,
  };
};