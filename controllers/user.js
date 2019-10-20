const sha256 = require('js-sha256');
const salt = 'tweedrsalt';

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let userNewControllerCallback = (req, res) => {
    res.render('users/new');
  };

  let userCreateControllerCallback = (req, res) => {
    db.user.userCreate(req.body, (err, result) => {
      data = {
        result: req.body
      }
      res.render('users/create', data);
    });
  };

  let userLoginControllerCallback= (req, res) => {
    res.render('users/login');
  };

  let userLoggedInControllerCallback = (req, res) => {
    db.user.userLogin(req.body, (err, result) => {
      if (err) {
        res.send( 'query error' );
      } else {
        console.log(result.rows);
        if (result.rows.length > 0) {
          let hashedPassword = sha256(req.body.password+salt);
          if (hashedPassword === result.rows[0].password) {
            let user_id = result.rows[0].id;
            let hashedCookie = sha256(user_id + salt);
  
            res.cookie('user_id', user_id);
            res.cookie('hasLoggedIn', hashedCookie);
            res.cookie('username', req.body.username);
            res.redirect('/tweedr');
          } else {
            res.status(403).send('wrong password');
          }
        } else {
          res.status(403).send('wrong username');
        }
      }
    });
  };

  let userProfileControllerCallback = (req, res) => {
    if (req.cookies.hasLoggedIn === sha256(req.cookies.user_id+salt)){
      db.user.userProfile(req.params.id, (err, result) => {
        data = {
          result: result,
          ownId: req.cookies.user_id
        }
        res.render('users/show', data);
      });
    } else {
      res.redirect('/login');
    }
  };

  let userFollowControllerCallback = (req, res) => {
    db.user.userFollow(req.cookies.user_id, req.body.id, (err, result) => {
      data = {
        result: [req.body]
      }
      res.render('users/followed', data);
    });
  };



  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    userCreate : userCreateControllerCallback,
    userNew : userNewControllerCallback,
    userLogin: userLoginControllerCallback,
    userLoggedIn: userLoggedInControllerCallback,
    userProfile: userProfileControllerCallback,
    userFollow: userFollowControllerCallback
  };

}
