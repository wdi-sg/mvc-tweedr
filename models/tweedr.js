/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let getAll = (cookieUserId, callback) => {
    let query = 'SELECT * FROM tweets';
    if(cookieUserId){
        query = `SELECT username, id AS users_id FROM users INNER JOIN (SELECT * FROM tweets INNER JOIN (SELECT user_id AS relations_user_id FROM relations WHERE follower_id='${cookieUserId}') AS userFollowings ON tweets.user_id = userFollowings.relations_user_id) AS followingTweets ON users.users_id=followingTweets.user_id`
    }
    dbPoolInstance.query(query, (error, queryResult) => {
      if( error ){
        callback(error, null);
      }else{
        if( queryResult.rows.length > 0 ){
        console.log(queryResult)
          callback(null, queryResult.rows);
        }else{
            console.log("all empty")
          callback(null, null);
        }
      }
    });
  };


let newUser = (values, callback) => {
    let query = "SELECT * FROM users WHERE username=$1"
    let usernameInput = [values[0]]
    dbPoolInstance.query(query, usernameInput, (error, queryResult)=>{
        if(error){
            callback(error, null);
        } else {
            if (queryResult.rows.length > 0){
                callback(null, null)
            } else {
                let query2 = "INSERT INTO users(username, password) VALUES($1,$2)"
                dbPoolInstance.query(query2, values, (error, res)=>{
                    if(error){
                        callback(error, null)
                    } else {
                        callback(null, 1)
                    }
                })
            }
        }
    })
}

let LogInChecks = (values, callback)=>{
    let query="SELECT * FROM users WHERE username=$1"
    let usernameInput = [values[0]]
    dbPoolInstance.query(query, usernameInput, (error, queryResult)=>{
        if(error){
            callback(error, null, null)
        } else {
            if (queryResult.rows.length > 0){
                let matchID = null
                queryResult.rows.forEach((item)=>{
                    if(item.username==values[0]&&item.password==values[1]){
                        matchID = item.id
                    }
                })
                if(matchID){
                    callback(null, matchID, 1)
                } else {
                    callback(null, null, 1)
                }
            } else {
                callback(null, null, null)
            }
        }
    })

}

let getAllUsers = (callback)=>{
    let queryText = "SELECT * FROM users"
    dbPoolInstance.query(queryText, (err, res)=>{
        callback(err, res)
    })
}

let getUser = (userDeets, callback)=>{
    let queryText = "SELECT * FROM users WHERE id=$1 AND username=$2"
    dbPoolInstance.query(queryText, userDeets, (err, res)=>{
        callback(err, res)
    })
}

let postTweet = (tweedDeets, callback)=>{
    let queryText = "INSERT INTO tweets (user_id,tweet) VALUES ($1,$2)"
    dbPoolInstance.query(queryText, tweedDeets, (err, res)=>{
        callback(err, res)
    })
}

let getUserInfo = (username, callback)=>{
    let queryText = "SELECT * FROM (SELECT * FROM users WHERE username=$1) AS username_selected INNER JOIN tweets ON username_selected.id=tweets.user_id"
    dbPoolInstance.query(queryText, [username], (err, res)=>{
        callback(err,res)
    })

}

let getFollowers = (username, callback)=>{
    let queryText = "SELECT * FROM (SELECT * FROM (SELECT * FROM users WHERE username=$1) AS pri_user INNER JOIN relations ON pri_user.id = relations.user_id) AS pri_user_relations INNER JOIN (SELECT id,username AS follower_username FROM users) AS follower_name on pri_user_relations.follower_user_id=follower_name.id"
    dbPoolInstance.query(queryText, [username], (err, res)=>{
        callback(err, res)
    })
}


  return {
    getAll,
    newUser,
    LogInChecks,
    getAllUsers,
    getUser,
    postTweet,
    getUserInfo,
    getFollowers
  };
};