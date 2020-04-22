module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */
const sha256 = require('js-sha256');

  let loginControllerCallback = (request, response) => {
    //response.send("hello");
    response.render("./forms/login");

  };

let processLogin = (request, response)=>{
    //response.send("Hurray");
    //console.log(request.body);
         db.login.login(request.body,(error, loginDetail) => {
            console.log( loginDetail);
        //const data = {}
        //data.tweets=tweets;
        if(loginDetail===null)
        {
            response.send("Failed Login");
            return;
        }
        var username = request.cookies['username'];
        var password=request.cookies['password'];


            username = request.body.loginname;



            password = sha256(request.body.password);

        response.cookie('username',username);
        response.cookie('password', password);
        response.redirect("/");
        //response.render("pokemon/index", data);
      });
};

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    login: loginControllerCallback ,
    process: processLogin,
  };

}