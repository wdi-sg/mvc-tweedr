/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  // Add a tweet
  const addTweet = (tweet, users_id) => {
    let queryString = "insert into tweets (tweet, users_id) values ($1, $2) returning *";

    const values = [tweet, users_id];

    return dbPoolInstance.query(queryString, values)
  };

  // Get all followees tweets
  const showTweet = (userID) => {
    let queryString = `
                    select tweets.tweet, tweets.users_id, users.username
                    from following
                    inner join tweets on (following.followee_id = tweets.users_id)
                    inner join users on (tweets.users_id = users.id)
                    where following.follower_id = ${userID}
                    or users.id = ${userID}
                    `;

    return dbPoolInstance.query(queryString)
  };

  return {
    addTweet,
    showTweet
  };
};