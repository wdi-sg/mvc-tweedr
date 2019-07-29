module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let loginControllerCallback = (req, res) => {
    if (req.cookies.loggedIn === undefined){
        res.render('loginPage');
    } else {
        res.render('homepage');
    }
  };

  let checkPasswordControllerCallback = (req, res) => {
    var sha256 = require('js-sha256');
    const SALT = "what am I doing";

    let currentUsername = req.body.username;
    let currentPw = req.body.password;
    var getInfo = (userInfo) => {

        if(userInfo.password === sha256(currentPw + SALT)){
            res.cookie('loggedin', sha256( userInfo.id + 'logged_id' + SALT ));
            res.cookie('user_id', userInfo.id);
            res.redirect('/tweedr/home/');
        }else{
            res.redirect('/tweedr');
        }
    }
    db.login.letsLogin(getInfo, currentUsername);
  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: loginControllerCallback,
    check: checkPasswordControllerCallback,
  };

}