module.exports = (db) => {
    const sha256 = require('js-sha256');
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
    db.tweed.checkUserQ(newUserName, (err, result) => {
        console.log("addNewuser controller "+result);
        if(result === null) {
            let hash = sha256(req.body.password);
            let values = [req.body.name, hash];
            db.tweed.addNewUserQ(values, (err, result) => {
                res.redirect('/');
            });
        } else {
            console.log("Name exist. Please register with another name.")
            res.redirect('/register');
        };
    });
  };

  let loginForm = (req, res) => {
    res.render('tweed/login');
  }

  let loginCheck = (req, res) => {
    let reqUser = req.body.name;
    let password = sha256(req.body.password);
      db.tweed.loginCheckQ(reqUser, (error, result) => {
        console.log(result);
        if(result === null) {
            console.log("user not found");
            res.redirect('/');
        } else {
            if (result[0].password === password) {
                console.log("logged in!")
                res.cookie('user', reqUser);
                res.cookie('logged in', 'true');
                res.redirect('/tweed');
            } else {
                console.log("password doesn't match");
                res.redirect('/')
            };
        }
      });
  };

  let tweedPage = (req, res) => {
    if (req.cookies['logged in'] === 'true'){
        res.render('tweed/tweedr');
    } else {
        res.status(403);
        res.redirect('/');
    }
  }

  let logout = (req, res) => {
    res.clearCookie('logged in');
    res.clearCookie('user');
    res.redirect('/');
  }




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
    tweedPage,
    logout,
  };
};
