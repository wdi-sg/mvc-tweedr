/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let allUsers = (username, callback) => {
    console.log("****************ENTERED USERS");
    let query = 'SELECT * FROM users WHERE NOT name= ($1)';
    let data = [username];
    let user_id="";

    dbPoolInstance.query(query, data, (error, queryResult) => {
      if( error ){
        console.log("Error")
        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed

        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);

        }else{
          callback(null, null);

        }
      }
    });
  };

    let userProfile = (username, callback) => {
    console.log("****************ENTERED USERS");
    let query = 'SELECT * FROM users WHERE name= ($1)';
    let user_id="";
    let data = [username];

       let data_object={};
    dbPoolInstance.query(query, data, (error, queryResult) => {
      if( error ){
        console.log("Error")
        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed

        if( queryResult.rows.length > 0 ){
            user_id= parseInt(queryResult.rows[0].id);
            data_object.userDetails=queryResult.rows[0];
            //console.log(user_id);
                let tweetQuery = 'SELECT * FROM tweets INNER JOIN users_tweets ON (users_tweets.tweets_id= tweets.id) WHERE user_id= ($1)';


                let tweetData = [user_id];
                dbPoolInstance.query(tweetQuery, tweetData, (error, queryTweetResult) => {
                  if( error ){
                    console.log("Error")
                    // invoke callback function with results after query has executed
                    callback(error, null);

                  }else{

                    // invoke callback function with results after query has executed

                    if( queryResult.rows.length > 0 ){
                        data_object.tweets=queryTweetResult.rows;
                        console.log(data_object);
                            let userQuery = 'SELECT * FROM users INNER JOIN users_followers ON (users_followers.follower_id= users.id) WHERE user_id= ($1)';
                            console.log(user_id);

                            let userData = [user_id];
                            dbPoolInstance.query(userQuery, userData, (error, queryUserResult) => {
                              if( error ){
                                console.log("Error from long")
                                // invoke callback function with results after query has executed
                                callback(error, null);

                              }else{

                                // invoke callback function with results after query has executed

                                if( queryResult.rows.length > 0 ){
                                    data_object.followers=queryUserResult.rows;
                                   console.log(data_object);
                                  callback(null, data_object);

                                }else{
                                  callback(null, null);

                                }
                              }
                            });

                    }else{
                      callback(null, null);

                    }
                  }
                });

        }else{
          callback(null, null);

        }
      }
    });
  };



  return {
    allUsers:allUsers,
    userProfile:userProfile,
  };
};