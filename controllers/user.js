module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let login = (request, response) => {
        response.render("user/login");
  };

  let loggedIn = (request, response) => {
 db.users.validateUser(request.body.username,(error, user)=>{
    if(error){
      response.send( error );
        }else{
            if(user.length > 1){
                response.send("Your user name or password is invalid.");
            }else{
                response.send(user[0]);
            }
        }
    });
};

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    login: login,
    loggedIn: loggedIn
  };

}