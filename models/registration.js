/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  const addUser = (username, password, callback) => {
    let queryString = "insert into users (username, password) values ($1, $2) returning *";

    const values = [username, password];

    let userID;

    dbPoolInstance.query(queryString, values, (err, results) => {
      if(err){
        console.log(err);
      }
      else{
        console.log(results.rows)
        userID = results.rows[0].id
        callback(userID);
      }
    })

  }

  return {
    addUser
  };
};