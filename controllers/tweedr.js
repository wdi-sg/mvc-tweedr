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
        db.tweedr.getAll(user_id, (error, results) => {
            let data = {
                username: username,
                userID: user_id,
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
    let image = request.body.image;
    tempUser = username

    db.tweedr.registeringUsers(username, hashedPassword, image, (err, results)=>{
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




//===================================================
  let addingTweeds = (request, response)=>{

    let requestTweed = request.body.tweed;
    let requestUserID = request.body.users_id;

    db.tweedr.addTweeds(requestTweed, requestUserID, (err, results)=>{
            response.redirect('/');
    });
  };
//===================================================



//===================================================
  let getOneUser = (request, response)=>{

    let requestUser = request.body.username;
    let user_id = request.cookies['user_id'];
    let hashedValue = sha256( SALT + user_id );

    if( request.cookies['hasLoggedIn'] === hashedValue){
        db.tweedr.getUser(requestUser,(err, results)=>{
                let data = {
                    userID: user_id,
                    results: results
                }
                response.render('tweedr/users', data);
        });
    } else {
        response.redirect('/login');
    };

  };
//===================================================




//===================================================
  let allUsers = (request, response)=>{

    let user_id = request.cookies['user_id']
    let hashedValue = sha256( SALT + user_id );

    if( request.cookies['hasLoggedIn'] === hashedValue){
        db.tweedr.getAllUsers(user_id, (err, results)=>{
            let data ={
                userID: user_id,
                results: results
            }
            response.render('tweedr/allUsers', data);
        });
    } else {
        response.redirect('/login');
    };


  };
//===================================================




//===================================================
  let logout = (request, response)=>{
    response.cookie('user_id', undefined);
    response.cookie('username', undefined);
    response.cookie('hasLoggedIn', undefined);

    response.redirect('/');
  };
//===================================================



//===================================================
  let followers = (request, response)=>{

    let user_id = request.cookies['user_id'];
    let hashedValue = sha256( SALT + user_id );

    if( request.cookies['hasLoggedIn'] === hashedValue){
        db.tweedr.getFollowers(user_id, (err, results)=>{
            response.render('tweedr/follows', {results});
        });
    } else {
        response.redirect('/login');
    };


  };
//===================================================



//===================================================
  let addFollowers = (request, response)=>{

    let user_id = request.body.user_id;
    let followUserId = request.body.followers_user_id;
    let hashedValue = sha256( SALT + user_id );

    if( request.cookies['hasLoggedIn'] === hashedValue){

        if (user_id === followUserId){
            response.render('tweedr/followError2')
        } else {
            db.tweedr.addingFollowers(user_id, followUserId, (err, results)=>{
                console.log("the results for adding followers are:");
                console.log(results);
                if (results === null){
                    response.render('tweedr/followError')
                } else {
                    response.redirect('/followers');
                }

            });
        };

    } else {
        response.redirect('/login');
    };

  };
//===================================================




//===================================================
  let profilePic = (request, response)=>{


    let user_id = request.cookies['user_id'];
    let hashedValue = sha256( SALT + user_id );

    if( request.cookies['hasLoggedIn'] === hashedValue){
        db.tweedr.showProfilePic(user_id, (err, results)=>{
            response.render('tweedr/profilePage', results[0]);
        });
    } else {
        response.redirect('/login');
    };

  };
//===================================================




//===================================================
  let changeProfilePic = (request, response)=>{

    let image = request.body.image;
    let user_id = request.cookies['user_id'];
    let hashedValue = sha256( SALT + user_id );

    if( request.cookies['hasLoggedIn'] === hashedValue){
        db.tweedr.changeProfilePic(userID, image, (err, results)=>{
            response.redirect('/profilePic');
        });
    } else {
        response.redirect('/login');
    };

  };
//===================================================






//===================================================
  let followYou = (request, response)=>{

    let user_id = request.cookies['user_id'];
    let hashedValue = sha256( SALT + user_id );

    if( request.cookies['hasLoggedIn'] === hashedValue){
        db.tweedr.followYou(user_id, (err, results)=>{
            response.render('tweedr/followYou', {results});
        });
    } else {
        response.redirect('/login');
    };


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
    addTweeds: addingTweeds,
    getOneUser: getOneUser,
    allUsers: allUsers,
    logout: logout,
    followYou: followYou,
    followers: followers,
    addFollowers: addFollowers,
    profilePic: profilePic,
    changeProfilePic: changeProfilePic,
  };

}