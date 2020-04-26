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

  const getTweetsOfAHashtag = (hashtagId, callback) => {
        let query = `SELECT tweets.tweet_id, tweets.body, hashtags_tweets.hashtag_id, hashtags.hashtag_name FROM tweets INNER JOIN hashtags_tweets ON hashtags_tweets.tweet_id = tweets.tweet_id INNER JOIN hashtags ON hashtags_tweets.hashtag_id = hashtags.hashtag_id WHERE hashtags_tweets.hashtag_id = ${hashtagId}`;
  }


  return {
        getAllHashtags: getAllHashtags,
        createHashtag: createHashtag,
        addHashtagToTweet: addHashtagToTweet
  };
    
};
