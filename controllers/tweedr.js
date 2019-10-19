const sha256 = require('js-sha256');
//          Config
//================================

module.exports = (db) => {

    let SALT = "xiangjiao";
    let tempUser;

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

//===================================================
  let indexControllerCallback = (request, response) => {
      db.tweedr.getAll((error, results) => {
        response.render('tweedr/index', { results});
      });
  };
//===================================================


//===================================================
  let registerControllerCallback = (request, response)=>{

    // let tempUser = request.cookie['temp_username'];

    db.tweedr.getUsers((err, results)=>{
        let data = {
            users: results,
            currentUser: tempUser
        }
        setTimeout(function(){tempUser = ""}, 800);
        response.render('tweedr/register', data);
    });
  };
//===================================================



//===================================================
  let loginControllerCallback = (request, response)=>{
    db.tweedr.getUsers((err, results)=>{
        let data = {
            users: results,
            currentUser: tempUser
        }
        setTimeout(function(){tempUser = ""}, 800);
        response.render('tweedr/login', data);
    });
  };
//===================================================



//===================================================
  let redirectControllerCallback = (request, response)=>{

    let hashedPassword = sha256(request.body.password + SALT);
    let username = request.body.username;
    tempUser = username

    db.tweedr.registeringUsers(username, hashedPassword, (err, results)=>{
        console.log(results);
        if (results){
            response.redirect('/login');
        } else {
            response.redirect('/register');
        }
    });
  };
//===================================================



//===================================================
  let goHomeOrGoAway = (request, response)=>{

    let requestUsername = request.body.username;
    let requestPassword = request.body.password;

    db.tweedr.loginUsers(requestUsername, (err, results)=>{
        if (results.rows.length > 0){
            let hashedPassword = sha256(requestPassword + SALT);

            if (hashedPassword === results.rows[0].password){

            }
        }


    });
  };
//===================================================





  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
    register: registerControllerCallback,
    login: loginControllerCallback,
    redirect: redirectControllerCallback,
    redirectToHome: goHomeOrGoAway,
  };

}