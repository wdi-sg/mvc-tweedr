/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */

module.exports = (dbPoolInstance) => {


  let addFavoriteToDatabase = (userid, tweetid, callback) => {
    values = [userid, tweetid];
        let queryString = "INSERT INTO favorites (user_id, tweet_id) VALUES ($1, $2) RETURNING *"
    dbPoolInstance.query(queryString, values, (err, queryResult) => {
        if (err){
            console.log("query error")
        } else {
            callback(err, queryResult.rows[0])
        }
    })
  }

  return {
    addFavoriteToDatabase
  };
};