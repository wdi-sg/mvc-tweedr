module.exports = (pool) => {
  let writeNewTweet = (content, userid, timestamp, cb) => {
    let queryText = `insert into tweets (content, timestamp, user_id) values ('${content}', '${timestamp}', ${userid}) returning *`;
    // console.log(queryText);
    pool.query(queryText, cb);
  };

  let writeTweetAndHt = (htArr, tweetId, cb) => {
    for (let i = 0; i < htArr.length; i++) {
      let htid = parseInt(htArr[i]);
      let queryText = `insert into tweet_hashtag (tweet_id, ht_id) values (${tweetId}, ${htid})`;
      pool.query(queryText, cb);
    }
  };

  let getOneTweet = (id, cb) => {
    let queryText = `select tweets.id, tweets.content, tweets.timestamp, hashtags.tag, tweet_hashtag.ht_id from tweets join tweet_hashtag on (tweets.id = tweet_hashtag.tweet_id) join hashtags on (tweet_hashtag.ht_id = hashtags.id) where tweets.id=${id}`;
    console.log(queryText);
    pool.query(queryText, cb);
  };

  let getAllTweets = (cb) => {
    let queryText =
      "select tweets.content, tweets.timestamp, tweets.id, users.username from tweets join users on (users.id = tweets.user_id)";
    pool.query(queryText, cb);
  };

  return {
    writeNewTweet: writeNewTweet,
    getOneTweet: getOneTweet,
    getAllTweets: getAllTweets,
    writeTweetAndHt: writeTweetAndHt,
  };
};
