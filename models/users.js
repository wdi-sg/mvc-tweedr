/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let getAll = (callback) => {

    let query = 'SELECT * FROM users ORDER BY user_id ASC';

    dbPoolInstance.query(query, (error, queryResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      }else{
        // invoke callback function with results after query has executed
        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);

        }else{
          callback(null, null);

        };
      };
    });
  };

  let addUser = (handle, name, dpUrl, pw, callback) => {

    let values = [handle, name, dpUrl, pw];

    let query = `INSERT INTO users(handle, display_name, dp_url, hashed_pw) VALUES ($1, $2, $3, $4) RETURNING *`

    dbPoolInstance.query(query, values, (err, result)=> {
      callback(err, result.rows[0]);
    })
  };

  const getUserLogin = (handle, pw, callback) => {

    let query = `SELECT * FROM users WHERE handle = '${handle}' AND hashed_pw = '${pw}'`
    
    dbPoolInstance.query(query, (err, result)=> {
      callback(err, result.rows[0])
    });
    
  };

  const getCurrentUserDetails = (id, callback)=> {

    let query = `SELECT * FROM users WHERE user_id = ${id}`;

    dbPoolInstance.query(query, (err, result)=> {
      callback(err, result.rows[0]);
    });

  };

  const followUser = (thisUser, toFollow, callback) => {
    let values = [toFollow, thisUser]
    let query = `INSERT INTO users_followers(leader_id, follower_id) VALUES ($1, $2) RETURNING *`
    dbPoolInstance.query(query, values, (err, result)=> {

      if (err) {
        console.log(`Error!!`, err)
      } else {
        callback(err, result.rows[0])
      };

    });
  };

  const getOneUser = (id, callback) => {

    let query = `SELECT * FROM users WHERE user_id = ${id}`

    dbPoolInstance.query(query, (err, result)=> {
        callback(err, result.rows[0])
    })
  }

  return {
    getAll: getAll,
    addUser: addUser,
    getUserLogin: getUserLogin,
    getCurrentUserDetails: getCurrentUserDetails,
    followUser: followUser,
    getOneUser: getOneUser
  };
};
