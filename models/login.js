/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  const authenticateLogin = (username, password) => {
    let queryString = `select * from users where username='${username}' and password='${password}'`;

    let userID;

    dbPoolInstance.query(queryString, (err, results) => {
      if(err){
        console.log(err);
      }
      else{
        userID = results.rows[0].id
        // callback(userID);
      }
    })

    .then(() => {return userID});

    }

  return {
    authenticateLogin
  };
};