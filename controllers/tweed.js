const sha256 = require('js-sha256');
const SALT = 'ice-cream';

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let tweedModHome = (req, res) => {
    res.render('tweed/index');
  };

  let registerForm = (req, res) => {
    res.render('tweed/register');
  };

  let addNewUser = (req, res) => {
    let newUserName = req.body.name;
    db.tweed.checkUserQ(newUserName, (error, checkUserQResult) => {
        if(checkUserQResult === null) {
            let reqHPassword = sha256(req.body.password);
            let values = [req.body.name, reqHPassword];
            db.tweed.addNewUserQ(values, (err, result) => {
                res.redirect('/');
            });
        } else {
            res.render('tweed/register', { register : "failed"});
        };
    });
  };

  let loginForm = (req, res) => {
    res.render('tweed/login');
  }

  let loginCheck = (req, res) => {
    let reqUser = req.body.name;
    let hashPassword = sha256(req.body.password);
      db.tweed.loginCheckQ(reqUser, (error, result) => {
        if(result === null) {
            console.log("user not found");
            res.redirect('/');
        } else {
            if (result[0].password === hashPassword) {
                console.log(hashPassword)
                console.log(result[0].password)
                let user_id = result[0].id;
                console.log(user_id);
                let hashLog = sha256(SALT+user_id);
                console.log("logged in!")
                res.cookie('user_id', user_id);
                res.cookie('logged in', hashLog);
                res.redirect('/all');
            } else {
                console.log("password doesn't match");
                res.redirect('/')
            };
        };
      });
  };

  let tweedMessage = (req, res) => {
    let user_id = req.cookies['user_id'];
    let hashLog = sha256(SALT + user_id);
    if (req.cookies['logged in'] === hashLog){
        let values = [req.body.message, user_id];
        db.tweed.messageQ(values, (err, result) => {
            res.redirect('/all');
        });
    } else {
        res.status(403);
        res.redirect('/');
    };
  };

  let tweedPage = (req, res) => {
    let user_id = req.cookies['user_id'];
    let hashLog = sha256(SALT + user_id);
    if (req.cookies['logged in'] === hashLog){
        db.tweed.allTweedsQ((error, result) => {
            res.render('tweed/tweedr', {result});
        })
    } else {
        res.status(403);
        res.redirect('/');
    };
  };

  let logout = (req, res) => {
    res.clearCookie('logged in');
    res.clearCookie('user');
    res.redirect('/');
  };




  // let tweedModCall = (request, response) => {
  //     db.tweed.getHomeQ((error, homeQResult) => {
  //       response.render('tweed/index', { homeQResult });
  //     });
  // };



  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    tweedModHome,
    registerForm,
    addNewUser,
    loginForm,
    loginCheck,
    tweedMessage,
    tweedPage,
    logout,
  };
};
