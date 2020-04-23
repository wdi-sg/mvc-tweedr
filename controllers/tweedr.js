module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */
    let registerControllerCallback = (request, response) => {
        response.render('register');
    };
    let loginControllerCallback = (request, response) => {
            response.render('login')
    };
    let homeControllerCallback = (request, response) => {
      //db.model.function
        db.tweedr.home((error, result) => {
          const data = {result}
            response.render('index', data);
        });
    };

    let registerNewUserCallback = (request,response) => {
      // console.log('register new user callback');
      // response.send('register new user callback');
      let name = request.body.username;
      let password = request.body.password;
      db.tweedr.register(name,password,(error,result) =>{
        if(error){
          response.send(error);
          return;
        }
        console.log(result);
        response.send('user added.');
      })
    };

    let loginUserCallBack =(request,response) => {
      console.log('login user callback');
      response.send('login user callback');
    };

    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        registerPage: registerControllerCallback,
        loginPage: loginControllerCallback,
        home: homeControllerCallback,
        register: registerNewUserCallback,
        login: loginUserCallBack
    };

}