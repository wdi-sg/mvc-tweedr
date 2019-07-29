var sha256 = require('js-sha256');

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  // let allUsersControllerCallback = (request, response) => {
  //     db.users.getAll((error, allUsers) => {
  //       response.render('student', { students:allStudents });
  //     });
  // };

    let TWEEDR = "This is the secret"



    let registerCallback = (request, response) => {
        response.render('register');
    };

    let loginCallback = (request, response) => {
        // db.users.getAll((error, results) => {
        response.render('login');
        // response.send(results);
      // });
    };

    let createUserCallback = (request, response) => {
        var callback = function (error,results) {
            if (results===null){
                response.send("404");
            } else {
                // console.log(request.cookies)
                // let TWEEDR = "This is the secret"
                let username = request.cookies.username;
                let sessionToken = sha256( username + TWEEDR );
                console.log("sessionToken is: ")
                console.log(sessionToken);

                // // check to see if err is null

                // // they have succesfully registered, log them in
                response.cookie('loggedin', sessionToken);
                response.cookie('username', request.body.username);

                response.redirect('/');
            }
        }

        db.users.createUser(callback, request.body.username, request.body.password);
    };


    let checkUserCallback = (request, response) => {
        var callback = function (error,results) {
            if (results===null){
                response.redirect('/login');
            } else {
                // console.log(request.cookies)
                let username = request.cookies.username;
                let sessionToken = sha256( username + TWEEDR );

                response.cookie('loggedin', sessionToken);
                response.cookie('username', request.body.username);

                response.redirect('/user/'+results[0].userid);
            }
        }

        db.users.checkUser(callback, request.body.username, request.body.password);
    };


    let allUsersControllerCallback = (request, response) => {
      db.users.getAll((error, allUsers) => {
        response.send(allUsers);
      });
    };

    let singleUserControllerCallback  = (request, response) => {
      var callback = function (error,results) {
        if (results===null){
            response.send("404");
        } else {
        response.send(results[0].name);
        }
      };

      db.users.getSingle(callback, request.params.id);
    };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
    return {
        getAllUsers: allUsersControllerCallback,
        getSingleUser: singleUserControllerCallback,
        renderRegister: registerCallback,
        renderLogin: loginCallback,
        login: createUserCallback,
        checkLogin: checkUserCallback
    };

}