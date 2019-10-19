const sha256 = require('js-sha256');
const salt = 'tweedrsalt';

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let indexControllerCallback = (req, res) => {
      res.render('tweedr/index');
  };
  
  let userNewControllerCallback= (req, res) => {
    res.render('users/new');
  };

  let userCreateControllerCallback= (req, res) => {
    db.tweedr.userCreate(req.body, (err, result) => {
      data = {
        result: req.body
      }
      res.render('users/create', data);
    });
  };

  let userLoginControllerCallback= (req, res) => {
    res.render('users/login');
  };

  let userLoggedInControllerCallback= (req, res) => {
    db.tweedr.userLogin(req.body, (err, result) => {
      if (err) {
        console.error('query error:', err.stack);
        res.send( 'query error' );
      } else {
        if (result.rows.length > 0) {
          let hashedPassword = sha256(req.body.password+salt);
          if (hashedPassword === result.rows[0].password) {
            let user_id = result.rows[0].id;
            let hashedCookie = sha256(user_id + salt);
  
            res.cookie('user_id', user_id);
            res.cookie('hasLoggedIn', hashedCookie);
            res.cookie('username', req.body.username);
            res.redirect('/');
          } else {
            res.status(403).send('wrong password');
          }
        } else {
          res.status(403).send('wrong username');
        }
      }
    });
  };

  
  


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
    userCreate : userCreateControllerCallback,
    userNew : userNewControllerCallback,
    userLogin: userLoginControllerCallback,
    userLoggedIn: userLoggedInControllerCallback
  };

}
