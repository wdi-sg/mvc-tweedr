const sha256 = require('js-sha256');
const SALT = "TwEeDr";

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let indexControllerCallback = (request, response) => {
      db.tweedr.getAll((error, allTweedr) => {
        response.render('tweedr/index', { allTweedr });
      });
  };

////////////////////////////////////////////////////////////////////////////////
  let redirect = (request, response) => {
        response.redirect('/tweedr');
  };
////////////////////////////////////////////////////////////////////////////////
  let home = (request, response) => {
    // let currentSessionCookie = request.cookies['loggedin'];
    // if (currentSessionCookie === undefined || currentSessionCookie === sha256('logged_out' + SALT )) {
    //     response.render('loginForm');
    // }
    // else {
    //     response.render('home');
    // }
    db.tweedr.showTweeds(request.body, (err, results) => {

        let tweedsList = results.rows;
        // console.log(tweedsList);

        var data = {
            tweedsList:tweedsList,
            cookieUserLogin: request.cookies["loggedin"],
            cookieUserName: request.cookies.username
        }
        console.log(data)
        response.render('home',data)
    })
  };

////////////////////////////////////////////////////////////////////////////////
  let showRegisterForm = (request, response) => {
    // let currentSessionCookie = request.cookies['loggedin'];
    // if (currentSessionCookie === undefined || currentSessionCookie === sha256('logged_out' + SALT )) {
        response.render('register');
    // }
    // else {
    //     response.redirect('/tweedr');
    // }
  };
//////////////////////////////////////////////////////////////////////////////
  let register = (request, response) => {
    // check if username exist in the table
        db.tweedr.checkUser(request.body, (err, results) => {
            if (err) {
                // console.error("Error checking user: ", err.message);
                response.send("Error checking user");
            }

            //console.log(results);
            if (results.rowCount >= 1) {
                response.send("You already registered. Please login.");

            } else {
                //  if rowcount = 0, means not registered
                db.tweedr.createUser(request.body, (err, results) => {

                    if (err) {
                        console.error("Error registering: ", err);
                        response.sendStatus(500);

                    } else {
                        //response.send("Register - Successful");

                        let user_id = results.rows[0].id;
                        let currentSessionCookie = sha256( user_id + 'logged_id' + SALT );
                        response.cookie('loggedin', currentSessionCookie);

                        response.cookie("username", results.rows[0].username);

                        response.redirect('/tweedr');
                    }
                })  // end of register db
            }
        })  // end of check user
  };
//////////////////////////////////////////////////////////////////////////////
let loginForm = (request, response) => {
        response.render('loginForm');
    }
//////////////////////////////////////////////////////////////////////////////
let login = (request, response) => {
    db.tweedr.login(request.body, (err, results) => {
        // query syntax error
        if (err) {
            console.error("Error getting user: ", err.message);
            //response.sendStatus(400);
            response.send("Error getting user");
        }
        if (results.rowCount === 0) {
            response.status(403).send('Invalid username/password!');
            //response.send("Invalid username/password");
        }
        else {
            //console.log(results.rows[0])
            // set cookie
            if (request.cookies.currentSessionCookie === undefined) {

                let user_id = results.rows[0].id;
                // console.log(user_id);
                let currentSessionCookie = sha256( user_id + 'logged_id' + SALT );
                response.cookie('loggedin', currentSessionCookie);

                response.cookie("username", results.rows[0].username);
               // response.send("Logged in");
                response.redirect("/tweedr/myTweeds");
            }
        }
    })
}
//////////////////////////////////////////////////////////////////////////////
let logout = (request, response) => {
    // console.log(request.cookies.loggedIn);
    response.cookie("loggedin", "");
    response.cookie("username", "");
    response.redirect('/');
};

//////////////////////////////////////////////////////////////////////////////
// let addtweed = (request, response) => {

//     if(request.cookies.loggedin === ''){

//         response.send("Please login.")
//         // console.log(results)
//     }
//     else{
//         response.render('addtweed')
//     }
// }
//////////////////////////////////////////////////////////////////////////////
let addtweedPost = (request, response) => {

    const username = request.cookies.username;
    // add username to request body
    request.body.username = username;

    db.tweedr.addTweedPost(request.body, (err, results) => {
        if (err) {
                console.error("Error posting tweed: ", err.message);
                response.send("Query error for tweeding");

            } else {
                //response.send("Tweed - Successful")
                response.redirect("/tweedr/myTweeds")
            }
    })
}
//////////////////////////////////////////////////////////////////////////////
 let showMyTweeds = (request, response) => {
    const username = request.cookies.username;
    db.tweedr.showMyTweeds(username, (err, results) => {

        var tweedsList = results.rows;
        console.log(username);

        var data = {
            tweedsList:tweedsList,
            username:username
        }
        console.log(data)
        response.render('myTweeds',data)
    })
  };
//////////////////////////////////////////////////////////////////////////////
let deletetweedPost = (request, response) => {

    const id = request.params.id;
    db.tweedr.deleteTweedPost(id, (err, results) => {
        if (err) {
                console.error("Error deleting tweed: ", err.message);
                response.send("Query error for deleting");

            } else {
                //response.send("Tweed - Successful")

                response.redirect("/tweedr")
            }
    })
}





  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
    redirect:redirect,
    home:home,

    showform: showRegisterForm,
    register:register,

    loginForm:loginForm,
    login:login,
    logout:logout,

    showMyTweeds:showMyTweeds,
    addtweedPost:addtweedPost,
    deletetweedPost:deletetweedPost,


  };

}
