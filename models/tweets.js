/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
const sha256 = require('js-sha256');

module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let Tweet = (tweettext, user_id, hashtagid, callback) => {
    values = [tweettext, user_id]
    let queryString = "INSERT INTO tweets (tweet, user_id) VALUES ($1, $2) RETURNING *"
    dbPoolInstance.query(queryString, values, (err, queryResult) => {
        if (err){
            console.log("query error")
        } else {
            if (hashtagid){
                let values2 = [hashtagid, queryResult.rows[0].id]
                let queryString2 = "INSERT INTO hashtags_tweets (hashtag_id, tweet_id) VALUES ($1, $2)"
                dbPoolInstance.query(queryString2, values2, (err2, queryResult2) => {
                    if (err2) {
                        console.log("query error")
                    }
                    callback(err, queryResult.rows[0])
                })
            } else {
                callback(err, queryResult.rows[0])
            }
        }
    })
  };

  let displayTweetsAndHashtags = (user_id, callback) => {
    values = [user_id]
    let queryString = "SELECT tweet, users.username FROM tweets INNER JOIN users ON tweets.user_id = users.id WHERE user_id = $1"
    dbPoolInstance.query(queryString, values, (err, queryResult) => {
        if (err){
            console.log("query error")
        } else {
            let secondQueryString = "SELECT * FROM hashtags"
            dbPoolInstance.query(secondQueryString, (err2, queryResult2) => {
                if (err2) {
                    console.log("query error")
                } else {
                    callback(err, queryResult.rows, queryResult2.rows)
                }
            })
        }
    })
  }

  let addHashtag = (hashtag, callback) => {
    values = [hashtag];
        let queryString = "INSERT INTO hashtags (hashtag) VALUES ($1) RETURNING *"
    dbPoolInstance.query(queryString, values, (err, queryResult) => {
        if (err){
            console.log("query error")
        } else {
            callback(err, queryResult.rows[0])
        }
    })
  }

  return {
    Tweet,
    displayTweetsAndHashtags,
    addHashtag
  };
};