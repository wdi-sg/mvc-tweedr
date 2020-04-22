module.exports = (db) => {
const sha256 = require('js-sha256');
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

let displayLogin = (req, res) => {
    res.render('login');
  }

let userLogin = (req, res) => {

    console.log(req.body);
    db.login.userLogin(req.body, (error, loginResult) => {
        if(error) {
            console.log("ERRRRROR AT LOGIN");
            console.log(error);
            return;
        }

        if(loginResult === null) {
            res.send("COULD NOT LOGIN");
            return;
        }

        console.log("##################");
        console.log(loginResult);
        console.log("LOGGGGIN RESULT");
        console.log("PASSWORD");


        let requestedPassword = sha256(req.body.password);

        if(loginResult[0].password === requestedPassword) {

            let username = req.cookies['username'];

            username = req.body.name;

            res.cookie('username', username);
            res.redirect('/');

        } else {
            res.send("WRONG PASSWORD, NOTIFYING THE POLICE");
        }
    })

}


  return {
    displayLogin: displayLogin,
    login: userLogin
  };

}