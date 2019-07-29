/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
 const SALT = 'macaroni cheese in a bowl';

 const sha256 = require('js-sha256');

 module.exports = (dbPoolInstance) => {
  // `dbPoolInstance` is accessible within this function scope

  let login = (data,callback) => {

    let usernameInput = data.username;
    let passwordInput = sha256(data.password + SALT);

    let text = "SELECT * FROM users WHERE username=" + usernameInput ;

    dbPoolInstance.query(text,(error, result) => {
      if (error) {

         console.log("login query error", error);
         callback(error, null);

     } else {
        if(result.rows.length === 1){
            if(result.rows[0].password === passwordInput){
                //successful
                let hashNamed = sha256(usernameInput+SALT);
                console.log(result.rows);
                callback(null, true);
             }
                else{
                    callback(null, null);
                }
            }
            else{
                callback(null, null);
            }
        }
    });
};

return {
    loginModelsFunction : login
};
};