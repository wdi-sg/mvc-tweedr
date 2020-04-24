const SALT = 'apple pie';

module.exports = (db) => {
const sha256 = require('js-sha256');
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

let displayLogin = (req, res) => {

    if(req.cookies && req.cookies.loggedIn) {
        //display new page
        const loggedIn = req.cookies.loggedIn;

        const data = {
            loggedIn: loggedIn
        }

        const values = req.cookies['user_id'];

        db.login.getName(values, (error, nameResult) => {
            data['userName'] = nameResult[0].user_name;
            res.render('tweeds', data);
        })



    } else {
        res.render('login');
    }
  }

let userLogin = (req, res) => {

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

        let requestedPassword = sha256(req.body.password);

        if(loginResult[0].password === requestedPassword) {

           let username = loginResult[0].user_name;

            //creates a cookie that is a hashed value
            let user_id = loginResult[0].id;
            let hashedCookie = sha256(SALT + req.body.username);
            res.cookie('loggedIn', hashedCookie);
            res.cookie('user_id', user_id);
            res.cookie('user_name', username);

            const data = {};
            data['userName'] = username;
            res.render('tweeds', data);



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