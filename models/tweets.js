module.exports = (pool) => {
  let writeNewTweet = (content, userid, timestamp, cb) => {
    let queryText = `insert into tweets (content, timestamp, user_id) values ('${content}', '${timestamp}', ${userid}) returning *`;
    // console.log(queryText);
    pool.query(queryText, cb);
  };

  let writeTweetAndHt = (htArr, tweetId, cb) => {
    if (htArr.length > 0) {
      for (let i = 0; i < htArr.length; i++) {
        let htid = parseInt(htArr[i]);
        let queryText = `insert into tweet_hashtag (tweet_id, ht_id) values (${tweetId}, ${htid})`;
        pool.query(queryText, cb);
      }
    }
  };

  let getOneTweet = (id, cb) => {
    let queryText = `select * from tweet_hashtag where tweet_id = ${id}`;
    pool.query(queryText, (err, result) => {
      if (result.rows.length > 0) {
        queryText = `select tweets.id, tweets.content, tweets.timestamp, hashtags.tag, tweet_hashtag.ht_id from tweets join tweet_hashtag on (tweets.id = tweet_hashtag.tweet_id) join hashtags on (tweet_hashtag.ht_id = hashtags.id) where tweets.id=${id}`;
        pool.query(queryText, cb);
      } else {
        queryText = `select * from tweets where id=${id}`;
        pool.query(queryText, cb);
      }
    });
  };

  let getAllTweets = async (cb) => {
    let queryText =
      "select tweets.content, tweets.timestamp, tweets.id, users.username from tweets join users on (users.id = tweets.user_id)";
    // console.log(queryText);
    let tweetsArr;
    await pool.query(queryText).then(async (result) => {
      // console.log("tweetArr:", result.rows);
      tweetsArr = result.rows;
      for (let i = 0; i < tweetsArr.length; i++) {
        queryText = `select tweet_hashtag.ht_id, hashtags.tag, tweet_hashtag.tweet_id from hashtags join tweet_hashtag on (hashtags.id = tweet_hashtag.ht_id) where tweet_id = ${tweetsArr[i].id}`;
        await pool.query(queryText).then((result) => {
          // console.log(result.rows);
          let htArr = result.rows;
          if (htArr.length > 0) {
            tweetsArr[i].htArr = htArr;
          } else {
            tweetsArr[i].htArr = [];
          }
        });
      }
    });
    // console.log("final:", tweetsArr);
    cb(tweetsArr);
  };

  let tweetsWithHashtagId = (htid, cb) => {
    let queryText = `select tweets.content, tweets.timestamp, tweets.id, users.username, tweet_hashtag.ht_id, hashtags.tag from tweets join users on (users.id = tweets.user_id) join tweet_hashtag on (tweets.id = tweet_hashtag.tweet_id) join hashtags on (hashtags.id = tweet_hashtag.ht_id) where tweet_hashtag.ht_id = ${htid}`;
    console.log(queryText);
    pool.query(queryText, cb);
  };

  return {
    writeNewTweet: writeNewTweet,
    getOneTweet: getOneTweet,
    getAllTweets: getAllTweets,
    writeTweetAndHt: writeTweetAndHt,
    tweetsWithHashtagId: tweetsWithHashtagId,
  };
};
