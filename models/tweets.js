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

  return {
    writeNewTweet: writeNewTweet,
    getOneTweet: getOneTweet,
  };
};
