/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

 //REGISTRATION OF NEW USER
  let registerUser = (user,callback)=>{

    let query = `INSERT INTO users (username,password) `
  }

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
        callback(queryResult.rows[0])
    })
  };

//DISPLAY ALL TWEETS ON MAIN PAGE
   let getAll = (callback) => {

    let query = `SELECT tweets.tweet, tweets.created_at, tweets.user_id,users.username FROM tweets INNER JOIN users ON (tweets.user_id = users.id)`;

    dbPoolInstance.query(query, (error, queryResult) => {


        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);

        }else{
          callback(null, null);

        }

    });
  };

//store and send out the functions
  return {
    getAll,
    verifyUser,
    sendTweed
  };
};