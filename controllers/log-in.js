module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */


  let loginCallback = (request, response) => {
        response.render('login');
  };

  let loginCheck = (request, response) => {
        let inputName = request.body.name;
        let inputPassword = (request.body.password);

        db.tweedr.userCheck(inputName, (error, result) => {
        if(result === null) {
            response.send("failed")
            // response.render('tweed/login', { login: "failed"});
        } else {
            if (result[0].password === inputPassword) {
                let user_id = result[0].id;
                let userLog = user_id;
                response.cookie('user_id', user_id);
                response.cookie('logged in', userLog);
                response.render('/');
            } else {
                response.send("login failed, please try again");
            };
        };
      });
  };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    loginCallback,
    loginCheck,
  };

}
