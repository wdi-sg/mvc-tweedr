const sha256=require('js-sha256');
const SALT = 'ThIs is ThE SecrEt pHrasE.';


module.exports = (db) => {

  /**
   * ===========================================
   * Login Controllers
   * ===========================================
   */

  let redirectPage = (request,response) => {
      response.redirect('/login');
  }

  let displayLoginPage = (request,response) =>{
      response.render('login/login');
  }

  let checkLogin = (request,response) => {
      let callback = function(error, id, user) {
        if(error){
          response.send(error);
        } else if (id>0) {
          let sessionCookie = sha256(`true` + SALT + id);
          let userCookie = user;

          response.cookie('meow',sessionCookie);
          response.cookie('woof',userCookie);
          response.redirect('/home/' + user);
        }else{
          response.redirect('/login');
        }
      }
      db.login.checkLogin(callback,request.body);

  }

  let displayRegisterPage = (request,response) => {
      response.render ('login/register');
  }

  let addUser = (request,response) => {
        let callback = function (error,success) {
          if (error){
            response.send(error);
          } else if (success) {
            response.redirect('/login');
          } else {
            response.send('SAME USERNAME DETECTED');
          }
        };

        db.login.addUser(callback,request.body);
  };

  let displayHomePage = (request,response) => {
      response.send('HELLO WORLD')
  }


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    redirect: redirectPage,
    login: displayLoginPage,
    loginCheck: checkLogin,
    register:displayRegisterPage,
    addUser:addUser,
    home: displayHomePage
  };

}
