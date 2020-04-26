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

  let displayFavFromDatabase = async (userid) => {
    let answer;
    try {
        values = [userid];
        let queryString = "SELECT DISTINCT tweet FROM tweets INNER JOIN favorites ON favorites.tweet_id = tweets.id WHERE tweets.user_id = $1;";
        answer = await dbPoolInstance.query(queryString, values)
    } catch (err) {
        console.log(err)
    }
    return answer.rows
  }

  return {
    addFavoriteToDatabase,
    displayFavFromDatabase
  };
};