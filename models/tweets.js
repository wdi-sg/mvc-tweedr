const sha256 = require("js-sha256");

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = dbPoolInstance => {
  // `dbPoolInstance` is accessible within this function scope

  let addUser = (newUser, callback) => {
    let username = newUser.username;
    let hashPassword = sha256(newUser.password);
    let input = [username, hashPassword];
    let query = "INSERT INTO users (username, password) VALUES ($1, $2) ";
    dbPoolInstance.query(query, input, (error, result) => {
      if (error) {
        callback(error, null);
      } else {
        if (result.rows.length > 0) {
         
          callback(null, result.rows);
        } else {
          callback(null, null);
        }
      }
   
    });
  };

  let checkUser = (user, callback) => {
    let input = [user.username];
    let queryString = "SELECT * FROM users WHERE users.username=$1";

    dbPoolInstance.query(queryString, input, (error, result) => {
      if (error) {
        callback(error, null);
      } else {
        if (result.rows.length > 0) {
          if (sha256(user.password) === result.rows[0].password && user.username === result.rows[0].username) {
            callback(null, result.rows[0]);
          } else {
            callback(null, "correct");
          }
        } else {
          callback(null, null);
        }
      }
    });
  };

  let addNewTweet = (tweet, userid, callback) => {
    let newTweet = tweet.tweet;
    let userId = userid;
    let input = [newTweet, userId];
    let queryString = "INSERT INTO tweets (tweet, user_id) VALUES ($1, $2)";
    dbPoolInstance.query(queryString, input, (error, result) => {
      if (error) {
        callback(error, null);
      } else {
        if (result.rows.length >= 0) {
       
          callback(null, result.rows)
        } else {
          callback(null, null);
        }
      }
    });
  };

  let allTweets = (userId, callback) => {
    let input = [userId];
    // let queryString = "SELECT * FROM tweets WHERE user_id=$1";
    // let queryString = "SELECT followers.followed_user_id, followers.follower_user_id,  tweets.tweet, users.username FROM followers INNER JOIN tweets ON (followers.followed_user_id = tweets.user_id OR followers.follower_user_id = tweets.user_id) INNER JOIN users ON (tweets.user_id = users.id) WHERE followers.follower_user_id = $1 OR tweets.user_id = $1 ORDER BY created_at DESC"
    let queryString = "SELECT DISTINCT followers.followed_user_id, followers.follower_user_id,  tweets.tweet, users.username, tweets.created_at FROM followers INNER JOIN tweets ON (followers.followed_user_id = tweets.user_id OR followers.follower_user_id = tweets.user_id) INNER JOIN users ON (tweets.user_id = users.id) WHERE followers.follower_user_id != $1 AND tweets.user_id = $1 OR followers.followed_user_id=$1 ORDER BY created_at DESC"




    dbPoolInstance.query(queryString, input, (error, result) => {
      if (error) {
        callback(error, null);
      } else {
        if (result.rows.length > 0) {
        
          callback(null, result.rows);
          console.log("THIS IS ALSO RESUTSA " +  result.rows[0]["created_at"])
        } else if(result.rows.length === 0) {
         
          callback(null, "no followers");
        }
      }
    });
  };

  let getOwnTweet = (userId, callback) =>{
    let input = [userId];
    let queryString = "SELECT * FROM tweets WHERE tweets.user_id=$1";

    dbPoolInstance.query(queryString, input, (error, result) => {
      if (error) {
        callback(error, null);
      } else {
        if (result.rows.length >= 0) {
        
          callback(null, result.rows);
        } 
      }
    });
  }

  let allTweedrUsers = (userId, callback) => {
    let userid = userId;
    let input = [userid];
    let queryString = "SELECT * FROM users WHERE id!= $1";
    dbPoolInstance.query(queryString, input, (error, result) => {
      if (error) {
        callback(error, null);
      } else {
        if (result.rows.length >= 0) {
          callback(null, result.rows);
        } else {
          callback(null, null);
        }
      }
    });
  };

  let tweedrUser = (id, callback) => {
    let userId = id;
    let input = [userId];
    let queryString =
      "SELECT tweets.tweet, users.username FROM users INNER JOIN tweets ON (users.id = user_id) WHERE user_id = $1";
    dbPoolInstance.query(queryString, input, (error, result) => {
      if (error) {
        callback(error, null);
      } else {
        if (result.rows.length >= 0) {
          callback(null, result.rows);
        } else {
          callback(null, null);
        }
      }
    });
  };


  let follower = (id, followerId, callback) => {
    let followed = id;
    let follower = followerId;
    let input = [followed, follower];
    let queryString =
      "INSERT INTO followers (followed_user_id, follower_user_id) VALUES($1, $2) ";
    dbPoolInstance.query(queryString, input, (error, result) => {
      if (error) {
        callback(error, null);
      } else {
        if (result.rows.length >= 0) {
          callback(null, result.rows);
        } else {
          callback(null, null);
        }
      }
    });
  };
  let getFollowing = (userId, callback) => {
    let followerId = userId;
    let input = [followerId];
    let queryString =
      "SELECT users.username, followers.followed_user_id, followers.follower_user_id FROM users INNER JOIN followers ON(users.id = followers.followed_user_id) WHERE followers.follower_user_id = $1";
    dbPoolInstance.query(queryString, input, (error, result) => {
      if (error) {
        callback(error, null);
      } else {
        if (result.rows.length > 0) {
          callback(null, result.rows);
        } else {
          callback(null, null);
        }
      }
    });
  };

  let getFollowers = (userId, callback) => {
    let followerId = userId;
    let input = [followerId];
    let queryString =
      "SELECT users.username, followers.followed_user_id, followers.follower_user_id FROM users INNER JOIN followers ON(users.id = followers.follower_user_id) WHERE followers.followed_user_id = $1";
    dbPoolInstance.query(queryString, input, (error, result) => {
      if (error) {
        callback(error, null);
      } else {
        if (result.rows.length > 0) {
          callback(null, result.rows);
        } else {
          callback(null, null);
        }
      }
    });
  };

  return {
    addUser,
    checkUser,
    addNewTweet,
    allTweets,
    getOwnTweet,
    allTweedrUsers,
    tweedrUser,
    follower,
    getFollowing,
    getFollowers
  };
};
