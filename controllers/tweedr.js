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

    let user_id = request.cookies['user_id'];
    let username = request.cookies['username'];
    let hashedValue = sha256( SALT + user_id );

    if( request.cookies['hasLoggedIn'] === hashedValue){
        db.tweedr.getAll((error, results) => {
            console.log("the results are:")
            console.log(results);
            let data = {
                username: username,
                tweeds: results
            }
        response.render('tweedr/index', data);
      });
    } else {
        response.redirect('/login');
    };


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
        if (results){
            let hashedPassword = sha256(requestPassword + SALT);

            if (hashedPassword === results[0].password){
                let user_id = results[0].id;
                let username = results[0].username;
                let hashedcookie = sha256(SALT + user_id);

                response.cookie('user_id', user_id);
                response.cookie('username', username);
                response.cookie('hasLoggedIn', hashedcookie);

                response.redirect('/');
            } else {
                response.status(403).render('tweedr/errorLogin');
            };
        } else {
            response.status(403).render('tweedr/errorLogin');
        };
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