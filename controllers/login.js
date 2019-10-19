module.exports = db => {
    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */
  
    let renderLoginForm = (request, response) => {
      response.render("users/login");
    };
  
    let loginUser = (request, response) => {
      const userLoginInfo = request.body;
  
      const renderCallback = (error, loggedInUser) => {
        if (error) {
            console.log("Error!\n", error);
        } else {
            if (loggedInUser) {
                response.render("users/loginSuccess", { loggedInUser });
            } else {
                response.render("users/loginFail");
            }
        }
      };
  
      db.userLogin.loginUser(renderCallback, userLoginInfo);
    };
  
    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        renderLoginForm,
        loginUser
    };
  };
  
  