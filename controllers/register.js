module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let registerControllerCallback = (req, res) => {
    res.render('registration');
  };

  let signupControllerCallback = (req, res) =>{
    var sha256 = require('js-sha256');
    const SALT = "what am I doing";
    let newUserInfo = req.body;
    res.cookie('loggedin', sha256( req.body.username + 'logged_id' + SALT ));
    res.cookie('user_id', newUserInfo.username);
    //how to parse back info from model to assign id
    res.redirect('/tweedr/home');
    db.register.registerUser(newUserInfo);
  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: registerControllerCallback,
    signup: signupControllerCallback,
  };

}