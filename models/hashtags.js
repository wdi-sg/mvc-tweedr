/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
  // `dbPoolInstance` is accessible within this function scope
  
  let getAllHashtags = (callback) => {
    let query = `SELECT * FROM hashtags`;
    dbPoolInstance.query(query, (err, result) => {
      callback(err, result.rows);
    });
  };


  let createHashtag = (name, callback) => {
    let query = `INSERT INTO hashtags(hashtag_name) VALUES('${name}') RETURNING *`;

    dbPoolInstance.query(query, (err, result) => {
      callback(err, result.rows[0]);
    });
  };

  let addHashtagToTweet = (hashtagId, tweetId, callback)=> {

      let query = `INSERT INTO hashtags_tweets(hashtag_id, tweet_id) VALUES (${hashtagId}, ${tweetId}) RETURNING *`;
      dbPoolInstance.query(query, (err, result)=> {
            callback(err, result.rows[0])
      })

  }


  return {
        getAllHashtags: getAllHashtags,
        createHashtag: createHashtag,
        addHashtagToTweet: addHashtagToTweet
  };
    
};
