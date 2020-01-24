module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */
  const sha256 = require('js-sha256');
  const SALT = "saltCookie";

  const isLoggedIn = (request) => {
     let user_id = request.cookies.user_id;
     let hashedCookie = sha256(SALT+user_id);
     return ( request.cookies.loggedIn === hashedCookie) ? true : false;
  }

  let login = (request, response) => {
    (isLoggedIn(request))
    ? response.redirect("/") :
    response.render("user/login");
  }

  let loggedIn = (request, response) => {
  db.users.validateUser(request.body.username,(error, user)=>{
    if(error){
      response.send( error );
        }else{
            if(user.length > 1){
                response.send("Your user name or password is invalid.");
            }else{
                 let hashedCookie = sha256(SALT+user[0].user_id);
                response.cookie('user_id', user[0].user_id);
                response.cookie('username', user[0].username);
                response.cookie('loggedIn', hashedCookie);
                response.redirect('/tweet');
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