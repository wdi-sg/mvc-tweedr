module.exports = (dbPoolInstance) => {
  let showAll = (callback) => {
    let query =
      "SELECT tweets.tweets, users.username FROM tweets INNER JOIN users ON (tweets.tweets_userid = users.id)";

    dbPoolInstance.query(query, (error, queryResult) => {
      if (error) {
        console.log("error!");
        callback(error, null);
      } else {
        console.log("this is working!");

        if (queryResult.rows.length > 0) {
          callback(null, queryResult.rows);
        } else {
          callback(null, null);
        }
      }
    });
  };

  return {
    showAll,
  };
};
