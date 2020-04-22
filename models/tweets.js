module.exports = (pool) => {
  let writeNewTweet = (content, userid, timestamp, cb) => {
    let queryText = `insert into tweets (content, timestamp, user_id) values ('${content}', '${timestamp}', ${userid}) returning *`;
    console.log(queryText);
    pool.query(queryText, cb);
  };

  let getOneTweet = (id, cb) => {
    let queryText = `select * from tweets where id=${id}`;
    pool.query(queryText, cb);
  };

  let getAllTweets = (cb) => {
    let queryText = "select tweets.content, tweets.timestamp, tweets.id, users.username from tweets join users on (users.id = tweets.user_id)";
    pool.query(queryText, cb);
  }

  return {
    writeNewTweet: writeNewTweet,
    getOneTweet: getOneTweet,
    getAllTweets: getAllTweets
  };
};
