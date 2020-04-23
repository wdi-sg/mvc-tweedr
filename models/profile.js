/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  const getProfile = (userProfileID) => {
    let queryString = `select * from tweets where users_id='${userProfileID}'`

    return dbPoolInstance.query(queryString)
  }

  const getFollower = (userProfileID, userID) => {
    let queryString = `select * from following where followee_id='${userProfileID}' and follower_id=${userID}`

    return dbPoolInstance.query(queryString)
  }

  const followProfile = (followerID, followeeID) => {
    let queryString = 'insert into following (follower_id, followee_id) values($1, $2) returning *';

    const values = [followerID, followeeID];

    return dbPoolInstance.query(queryString, values);
  }

  return {
    getProfile,
    followProfile,
    getFollower
  };
};