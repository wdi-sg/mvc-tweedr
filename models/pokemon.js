/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

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
  }

  return {
    verifyUser,
    sendTweed
  };
};