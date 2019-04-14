module.exports = (allModels) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let loginRequestHandler = (request, response) => {
    response.render('./login/login');
  };

  let loginControllerCallback = (request, response) => {

      const data = {
        username:request.body.username,
        password:request.body.password
      };

      const loginSuccessfulCallback = (usernameInput, hashedUsername) => {
        console.log("login controller successful: ");
        response.cookie('username', usernameInput);
        response.cookie('loggedIn', hashedUsername);
        response.redirect('/');
      };

      const loginUnsuccessfulCallback = () => {
        console.log("login controller unsuccessful: ");
        response.render('./login/loginUnsuccessful', data);
      };
      
      allModels.loginModelsObject.loginModelFunction(data, loginSuccessfulCallback, loginUnsuccessfulCallback);
    
  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    loginRequestHandler: loginRequestHandler,
    loginControllerCallback: loginControllerCallback
  };

}
