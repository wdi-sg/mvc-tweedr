module.exports = (pool) => {

  let writeNewTweet = (content, userid, timestamp, cb) => {
    let queryText = `insert into tweets (content, timestamp, user_id) values ('${content}', '${timestamp}', ${userid}) returning *`;
    console.log(queryText);
    pool.query(queryText, cb);
  }

  return {
    writeNewTweet: writeNewTweet
  };
};
