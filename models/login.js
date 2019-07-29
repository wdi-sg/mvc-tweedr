const sha256=require('js-sha256');
const PSALT = 'sErceT pAsSwoRd adDiTioNaL pHraSe';


/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  //Check Login Function
  let checkLogin = (callback, userDetails) =>{
    let queryString = "SELECT * FROM users WHERE username = '" + userDetails.username +"'";
    dbPoolInstance.query(queryString, (error,queryResult)=> {
      if (error) {
        callback(error,0,null);
      } else {
        let passwordHash = sha256(userDetails.password + PSALT);
        if (queryResult.rows.length>0 && passwordHash === queryResult.rows[0].password){
          callback(error,queryResult.rows[0].id,queryResult.rows[0].username);
        } else {
          callback(error,0,null);
        }
      }
    });
  };

  //Add User Function
  let addUser = (callback , userDetails) => {
    let queryString = "SELECT * FROM users WHERE username = '" + userDetails.username +"'";
    dbPoolInstance.query(queryString, (error,queryResult) => {
      if (error) {
        callback (error,false);
      } else if (queryResult.rows.length === 0 ) {
        let passwordHash = sha256(userDetails.password + PSALT);
        let queryString = "INSERT into users (username,password,name,photo,age) VALUES ($1,$2,$3,$4,$5) returning id";
        let values = [userDetails.username,passwordHash,userDetails.name,userDetails.photo,userDetails.age];
        dbPoolInstance.query(queryString, values, (error,queryResult)=>{
          if (error){
            callback (error,false);
          } else {
            callback(null,true);
          }
        });
      } else {
        callback (null,false);
      }
    });
  };
 


  return {
    checkLogin,
    addUser
  };

};

