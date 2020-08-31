module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let welcome = (req, res) => {
    if (req.cookies.loggedIn === 'true') {
      // res.send("WORKING")
      res.redirect(`tweed/${req.cookies.username}`)
    } else {
      res.render('users/homepage')
    }
  }
  
  let loginPage = (req, res) => {
    res.clearCookie('username');
    res.clearCookie('loggedIn');
    res.render('users/login');
  };

  let login = (req, res) => {
    let returnInfo = req.body;
    let username = returnInfo.username;
    let password = returnInfo.password;
    db.users.userLogin(username, password, (err, result) => {
      if (err) {
        console.log("-- Error in login controller", err.message)
      } else {
        if (result === false) {
          res.send("User not exist! Please try again")
        } else if (result === "wrong password") {
          res.send("Wrong Password!")
        } else {
          res.cookie('username', result.username);
          res.cookie('loggedIn', true)
          res.redirect(`tweed/${result.username}`)
        }
      }
    })
  };

  




  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    welcome,
    loginPage,
    login,
  };

}
