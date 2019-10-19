const sha256 = require('js-sha256');
const salt = 'tweedrsalt';

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let indexControllerCallback = (req, res) => {
    if (req.cookies.hasLoggedIn === sha256(req.cookies.user_id+salt)){
      db.tweedr.tweedIndex(req.cookies.user_id, (err, result) => {
        data = {
          result: result
        }
        res.render('tweedr/index', data);
      });
    } else {
      res.redirect('/login');
    }
  };
  
  let userNewControllerCallback = (req, res) => {
    res.render('users/new');
  };

  let userCreateControllerCallback = (req, res) => {
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

  let userLoggedInControllerCallback = (req, res) => {
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

  let tweedNewControllerCallback = (req, res) => {
    if (req.cookies.hasLoggedIn === sha256(req.cookies.user_id+salt)){
      res.render('tweedr/new');
    } else {
      res.redirect('/login');
    }
  };

  let tweedCreateControllerCallback= (req, res) => {
    if (req.cookies.hasLoggedIn === sha256(req.cookies.user_id+salt)){
      db.tweedr.tweedCreate(req.body, req.cookies.user_id, (err, result) => {
        data = {
          result: result
        }
        res.render('tweedr/create', data);
      });
    } else {
      res.redirect('/login');
    }
  };

  let userProfileControllerCallback = (req, res) => {
    db.tweedr.userProfile(req.params.id, (err, result) => {
      data = {
        result: result
      }
      console.log(result,"result")
      res.render('users/show', data);
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
    userLoggedIn: userLoggedInControllerCallback,
    tweedNew: tweedNewControllerCallback,
    tweedCreate: tweedCreateControllerCallback,
    userProfile: userProfileControllerCallback
  };

}
