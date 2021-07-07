module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

   let loginRequestHandler = (request, response) => {
    response.render("./login/login");
    }

    let loginControllerCallback = (request, response) => {
        const data = {
            username:request.body.username,
            password:request.body.password
        };
        db.loginModels.loginModelsFunction (data, (error, result) =>{
            if(result === true){
                console.log("login controller: ");
                response.cookie('username',usernameInput);
                response.cookie('loggedin',hashUsername)
                response.redirect('/');
            } else {
                console.log("login in fail!");
                response.render("./login/loginUnsuccessful",data);
                }
        });
    };
  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
        return {
            loginControllerCallback: loginControllerCallback,
            loginRequestHandler: loginRequestHandler
        };

}