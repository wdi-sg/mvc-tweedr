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

  return {
    getProfile
  };
};