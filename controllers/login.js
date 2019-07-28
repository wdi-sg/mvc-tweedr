module.exports = (allModels) => {

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

      const loginSucessfulCallback = (usernameInput, hashUsername) => {
        console.log("login controller: ");
        response.cookie('username',usernameInput);
        response.cookie('loggedin',hashUsername)
        response.redirect('/');
      };

      const loginUnsuccessfulCallback =()=> {
        console.log("login in fail!");
        response.render("./login/loginUnsuccessful",data);
      }

      allModels.loginModelsObject.loginModelFunction(data, loginSucessfulCallback, loginUnsuccessfulCallback);

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