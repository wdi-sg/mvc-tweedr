module.exports = (pool) => {

  let toggle = async (userId, tweetId, cb) => {
    let queryText = `select * from likes where user_id = ${userId} and tweet_id = ${tweetId}`;
    await pool.query(queryText).then(async (result) => {
      console.log(result.rows);
      let data = {};
      let likeCount;
      if (result.rows.length > 0) {
        let likeData = result.rows[0];
        if (likeData.islike === true) {
          queryText = `update likes set islike = 'false' where user_id = ${userId} and tweet_id = ${tweetId} returning *`;
          await pool.query(queryText).then(async (result) => {
            data.like = result.rows[0];
          });
        } else {
          queryText = `update likes set islike = 'true' where user_id = ${userId} and tweet_id = ${tweetId} returning *`;
          await pool.query(queryText).then(async (result) => {
            data.like = result.rows[0];
          });
        }
      } else {
        queryText = `insert into likes (user_id, tweet_id, islike) values (${userId}, ${tweetId}, 'true') returning *`;
        await pool.query(queryText).then(async (result) => {
          data.like = result.rows[0];
        });
      }
      queryText = `select * from likes where tweet_id = ${tweetId} and islike = 'true'`;
      await pool.query(queryText).then(async (result) => {
        if (result.rows.length > 0) {
          likeCount = result.rows.length;
        } else {
          likeCount = "";
        }
        data.likeCount = likeCount;
        cb(data);
      });
    });
  };

  return {
    toggle: toggle,
  };
};
