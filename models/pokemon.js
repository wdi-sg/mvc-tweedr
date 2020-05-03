/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

 //REGISTRATION OF NEW USER
  let registerUser = (user,hashedPw, callback)=>{

    let query = `INSERT INTO users (username,password) VALUES ('${user}', '${hashedPw}') RETURNING *`
    console.log(query)

    dbPoolInstance.query(query, (error, queryResult) => {
        callback(queryResult.rows[0])
    })
  };

 //SEARCH FOR USERNAME OF USER LOGGING IN
  let verifyUser = (user,callback) => {

    let query = `SELECT * FROM users WHERE username = '${user}';`;

    dbPoolInstance.query(query, (error, queryResult) => {
        if (queryResult.rows.length>0){
            callback(queryResult.rows[0])
        } else {
            callback(null);
        }
    });
  };

//INSERT TWEET INTO TWEET TABLE
  let sendTweed = (tweed, userId, callback) => {
    let query = `INSERT INTO tweets (tweet, user_id) VALUES ('${tweed}', ${userId}) RETURNING *`
    console.log(query)

    dbPoolInstance.query(query, (error, queryResult) => {
        console.log(queryResult)
        callback(queryResult.rows[0])
    })
  };

//DISPLAY ALL TWEETS ON MAIN PAGE
   let getAll = (callback) => {

    let query = `SELECT tweets.tweet, tweets.created_at, tweets.user_id,users.username, users.id FROM tweets INNER JOIN users ON (tweets.user_id = users.id) ORDER BY created_at DESC`;

    dbPoolInstance.query(query, (error, queryResult) => {

        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);
        }else{
          callback(null, null);
        }
    });
  };

  //DISPLAY TWEETS BY USER
   let myTweets = (id, callback) => {

    let query = `SELECT tweets.tweet, tweets.created_at, users.username FROM tweets INNER JOIN users ON (tweets.user_id=users.id)WHERE user_id = ${id}ORDER BY created_at DESC`;

    dbPoolInstance.query(query, (error, queryResult) => {

        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);
        }else{
          callback(null, null);
        }
    });
  };

  //FOLLOW ANOTHER USER

  let follow = (id, followerId,callback)=>{

    let query = `INSERT INTO followers (user_id, follower_id) VALUES (${id}, ${followerId}) RETURNING *`

    dbPoolInstance.query(query, (error, queryResult) => {

        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows[0]);
        }else{
          callback(null, null);
        }
    });
  };







//store and send out the functions
  return {
    getAll,
    registerUser,
    verifyUser,
    sendTweed,
    myTweets,
    follow
  };
};