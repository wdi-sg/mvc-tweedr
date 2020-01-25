module.exports = dbPoolInstance => {
  const registerUser = (username, password, callback) => {
    const values = [username, password];
    const query =
      "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *";
    dbPoolInstance.query(query, values, (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(err, result.rows[0]);
      }
    });
  };

  const loginUser = (username, password, callback) => {
    const values = [username];
    const query = "SELECT * from users where username = $1";
    dbPoolInstance.query(query, values, (err, result) => {
      if (result.rows[0] === undefined) {
        callback("User doesn't exist!");
      } else {
        if (result.rows[0].password === password) {
          callback(err, result.rows[0]);
        } else {
          callback("Wrong password!");
        }
      }
    });
  };

  const postTweed = (tweed, userID, callback) => {
    const now = new Date();
    const values = [tweed, userID, now];
    const query =
      "INSERT INTO tweets (tweets, user_id, created_at) VALUES ($1, $2, $3) RETURNING *";
    dbPoolInstance.query(query, values, (err, result) => {
      if (err) callback(err);
      else {
        callback(err, result.rows);
      }
    });
  };

  const getTweeds = (userID, callback) => {
    const values = [userID];
    const query = "SELECT * from tweets where user_id = $1";
    dbPoolInstance.query(query, values, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(err, result.rows);
      }
    });
  };

  const showUser = (id, callback) => {
    const userID = id;
    const values = [userID];
    const query = "SELECT * from users where id = $1";
    dbPoolInstance.query(query, values, (err, result) => {
      if (err) console.log(err);
      else {
        callback(err, result.rows[0]);
      }
    });
  };

  const followUser = (userID, followerID, callback) => {
    const values = [userID, followerID];
    const query =
      "INSERT INTO user_follower (user_id, follower_id) VALUES ($1, $2) RETURNING *";
    dbPoolInstance.query(query, values, (err, result) => {
      if (err) callback(err);
      else {
        callback(err, result.rows);
      }
    });
  };

  const seePostsOfFollowing = (userID, callback) => {
    const values = [userID];
    const query = `SELECT tweets.tweets, tweets.id, tweets.user_id, users.username as username
                    FROM tweets
                    INNER JOIN user_follower
                    on (tweets.user_id = user_follower.user_id)
                    INNER JOIN users
                    on (tweets.user_id = users.id)
                    where user_follower.follower_id = $1`;
    dbPoolInstance.query(query, values, (err, result) => {
      if (err) callback(err);
      else {
        callback(err, result.rows);
      }
    });
  };

  const seePostsOfFollowers = (userID, callback) => {
    const values = [userID];
    const query = `SELECT tweets.tweets, tweets.id, tweets.user_id, users.username as   username
                    FROM tweets
                    INNER JOIN user_follower
                    on (tweets.user_id = user_follower.follower_id)
                    INNER JOIN users
                    on (tweets.user_id = users.id)
                    where user_follower.user_id = $1`;
    dbPoolInstance.query(query, values, (err, result) => {
      if (err) callback(err);
      else {
        callback(err, result.rows);
      }
    });
  };

  const showTweed = (tweedID, callback) => {
    let data = {};
    const values = [tweedID];
    const query = "SELECT * from tweets where id = $1";
    dbPoolInstance.query(query, values, (err, result) => {
      if (err) callback(err);
      else {
        const userID = result.rows[0].user_id;
        const values = [userID];
        const userQuery = "SELECT * from users where id = $1";
        data.tweed = result.rows[0];
        // callback(err, data);
        dbPoolInstance.query(userQuery, values, (err, result) => {
          if (err) callback(err);
          else {
            data.user = result.rows[0];
            callback(err, data);
          }
        });
      }
    });
  };

  const sortTweedsByDate = (userID, callback) => {
    const values = [userID];
    const query =
      "SELECT * from tweets WHERE user_id = $1 ORDER BY created_at desc";
    dbPoolInstance.query(query, values, (err, result) => {
      if (err) callback(err, null);
      else {
        callback(err, result.rows);
      }
    });
  };

  return {
    registerUser: registerUser,
    loginUser: loginUser,
    postTweed: postTweed,
    getTweeds: getTweeds,
    showUser: showUser,
    followUser: followUser,
    seePostsOfFollowing: seePostsOfFollowing,
    seePostsOfFollowers: seePostsOfFollowers,
    showTweed: showTweed,
    sortTweedsByDate: sortTweedsByDate
  };
};
