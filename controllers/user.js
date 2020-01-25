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
    let username = request.body.username;
    let password = sha256(request.body.password+SALT);
  db.users.validateUser(username,password,(error, user)=>{
    if(error){
      response.send( error );
        }else{
            if(user.length < 1){
                response.send("Your user name or password is invalid.");
            }else{
                 let hashedCookie = sha256(SALT+user[0].user_id);
                response.cookie('user_id', user[0].user_id);
                response.cookie('username', user[0].username);
                response.cookie('loggedIn', hashedCookie);
                response.redirect('/');
            }
        }
    });
};
let register = (request,response)=>{
    response.render("user/register");
}
let addUser = (request,response)=>{
    let username = request.body.username;
    let password = sha256(request.body.password+SALT)
    db.users.registerUser(username,password,(error)=>{
    if(error==="exist"){
        response.send("username not unique");
    }
    else if(error){
       response.status(500).send("error")
        }
        else{
                response.redirect('/login');
        }
    });
}
  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    login,
    loggedIn,
    register,
    addUser
  };

}