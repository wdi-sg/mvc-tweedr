/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope
// 'SELECT * FROM users INNER JOIN followers ON (users.id = followers.follower_id) WHERE followers.user_id = $1'
// let query = 'SELECT * FROM users AS usersA INNER JOIN followers ON (usersA.id = followers.follower_id) INNER JOIN users ON (users.id = followers.user_id) WHERE users.name=$1;'
//code to see followers
//SELECT name FROM users INNER JOIN followers on (users.id = followers.user_id) WHERE followers.follower_id =12 AND users.name !='Herda';
//SELECT all users who are not followed by a user
// SELECT * FROM users where users.id NOT IN (SELECT user_id FROM followers where follower_id =12) AND users.name!='Herda';

  let home = (cookies,callback) => {
    //to sift out users who are not followed by the user
    let query = 'SELECT * FROM users where users.id NOT IN (SELECT user_id FROM followers where follower_id=$1) AND users.name!=$2;'
    let value = [cookies.id,cookies.username]
    dbPoolInstance.query(query, value,(error, queryResult) => {
      if( error ){
        callback(error, null);
      }else{
        // to get users who are following the user
        // SELECT * FROM users INNER JOIN tweets ON (users.id = tweets.user_id) INNER JOIN followers ON (users.id = followers.follower_id) WHERE followers.user_id =12;
        // 'SELECT * FROM users INNER JOIN followers ON (users.id = followers.follower_id) WHERE followers.user_id ='+cookies.id
        let followingquery = 'SELECT * FROM users INNER JOIN tweets ON (users.id = tweets.user_id) INNER JOIN followers ON (users.id = followers.follower_id) WHERE followers.user_id ='+cookies.id;
        dbPoolInstance.query(followingquery,(error, secondResult) => {
          if( error ){
            callback(error, null);
          }else{
            //SELECT * FROM users INNER JOIN tweets ON (users.id = tweets.user_id) INNER JOIN followers ON (users.id = followers.follower_id) WHERE followers.user_id =12;
            //to get users who are followed by the user
            let followerquery = 'SELECT * FROM users INNER JOIN tweets ON (users.id = tweets.user_id) INNER JOIN followers ON (users.id = followers.user_id) WHERE followers.follower_id ='+cookies.id;
             // 'SELECT * FROM users INNER JOIN followers ON (users.id = followers.user_id) WHERE followers.follower_id ='+cookies.id;
            dbPoolInstance.query(followerquery,(error, thirdResult) => {
              if( error ){
                callback(error, null);
              }else{
                var dataSet = {
                  queryResult: queryResult.rows,
                  secondResult:secondResult.rows,
                  thirdResult:thirdResult.rows
                }
                callback(null, dataSet);
                }
              }
            );
          }
        });
      }
    });
  };
  //show all tweets when registered or unregistered user access the root route
  let getTweets = (callback) => {
    let query = 'SELECT users.name,users.id,tweets.tweet,tweets.id AS tweetid FROM tweets INNER JOIN users ON (tweets.user_id = users.id)';
    dbPoolInstance.query(query, (error, queryResult) => {
      if( error ){
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
  //enter new user data into database
  let newUser = (createUser,callback) => {
    let query = 'INSERT INTO users (name,password) SELECT $1,$2 WHERE NOT EXISTS (SELECT 1 FROM users WHERE name =$1) RETURNING *';
    let values = [createUser.username,createUser.password]
    dbPoolInstance.query(query,values,(error, queryResult) => {
      if( error ){
        // invoke callback function with results after query has executed
        callback(error, null);
      }else{
        // invoke callback function with results after query has executed
        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows[0]);
        }else{
          callback(null, null);
        }
      }
    });
  };

  let login = (verifyUser,callback) => {
    let query = 'SELECT * FROM users WHERE name=$1 AND password=$2';
    let values = [verifyUser.username,verifyUser.password]
    dbPoolInstance.query(query,values,(error, queryResult) => {
      if( error ){
        // invoke callback function with results after query has executed
        callback(error, null);
      }else{
        // invoke callback function with results after query has executed
        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows[0]);
        }else{
          callback(null, null);
        }
      }
    });
  };

  let sendTweed = (userDetails,callback)=>{
    let query = 'SELECT users.id FROM users WHERE name=$1';
    let value = [userDetails.cookies.username]
    dbPoolInstance.query(query,value,(error, queryResult) => {
      if( error ){
        // invoke callback function with results after query has executed
        callback(error, null);
      }else{
        // invoke callback function with results after query has executed
        if( queryResult.rows.length > 0 ){
          // callback(null, queryResult.rows);
          let insert = 'INSERT INTO tweets (user_id, tweet) VALUES ($1,$2) RETURNING *'
          let values = [queryResult.rows[0].id, userDetails.tweed.tweed]
          dbPoolInstance.query(insert,values,(error, result) => {
            if( error ){
              // invoke callback function with results after query has executed
              callback(error, null);
            }else{
              // invoke callback function with results after query has executed
              if( result.rows.length > 0 ){
                callback(null, result.rows);
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
  }
  let follow = (followinfo,callback)=>{
    let query = 'SELECT * FROM users where name=$1'
    let value = [followinfo.username.username]
    dbPoolInstance.query(query,value,(error,queryResult)=>{
      if( error ){
        // invoke callback function with results after query has executed
        callback(error, null);
      }else{
        // invoke callback function with results after query has executed
        if( queryResult.rows.length > 0 ){
          // callback(null, queryResult.rows);
          let insert = 'INSERT INTO followers (user_id, follower_id) VALUES ($1,$2) RETURNING *'
          let values = [followinfo.follow[followinfo.username.username],queryResult.rows[0].id]
          dbPoolInstance.query(insert,values,(error, result) => {
            if( error ){
              // invoke callback function with results after query has executed
              callback(error, null);
            }else{
              // invoke callback function with results after query has executed
              if( result.rows.length > 0 ){
                callback(null, result.rows);
              }else{
                callback(null, null);
              }
            }
          });
        }else{
          callback(null, null);
        }
      }
    })
  }
  let users = (userid,callback)=>{
    let query = 'SELECT users.name, tweets.id AS tweetid, tweets.user_id, tweets.tweet FROM users INNER JOIN tweets ON (users.id = tweets.user_id) WHERE users.id='+userid
    dbPoolInstance.query(query,(error, result) => {
      if (error){
        callback(error, null)
      }else{
        if (result.rows.length === 0){
          let nameQuery = 'SELECT name FROM users WHERE id='+userid
          dbPoolInstance.query(nameQuery,(error, secondResult)=>{
            if (error){
              callback(error, null)
            }else{
              console.log(secondResult.rows)
              callback(null,secondResult.rows)
            }
          })
        }else{
          callback(null,result.rows)
        }
      }
    })
  }
  let tweet = (tweetid,callback)=>{
    let query = 'SELECT tweets.id, tweets.user_id, tweets.tweet, users.name FROM tweets INNER JOIN users ON (users.id=tweets.user_id) WHERE tweets.id='+tweetid
    dbPoolInstance.query(query,(error,result)=>{
      if(error){
        callback(error,null)
      }else{
        callback(null, result.rows)
      }
    })
  }

  return {
    follow,
    home,
    getTweets,
    newUser,
    login,
    sendTweed,
    users,
    tweet,
    
  };
};
