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
    const values = [tweed, userID];
    const query =
      "INSERT INTO tweets (tweets, users_id) VALUES ($1, $2) RETURNING *";
    dbPoolInstance.query(query, values, (err, result) => {
      if (err) callback(err);
      else {
        callback(err, result.rows);
      }
    });
  };

  const getTweeds = (userID, callback) => {
    const values = [userID];
    const query = "SELECT * from tweets where users_id = $1";
    dbPoolInstance.query(query, values, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(err, result.rows);
      }
    });
  };

  return {
    registerUser: registerUser,
    loginUser: loginUser,
    postTweed: postTweed,
    getTweeds: getTweeds
  };
};
