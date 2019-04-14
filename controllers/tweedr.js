module.exports = (db) => {
    //  CONTROLLER LOGIC

    const home = (request, response) => {

        db.tweedr.home((err, results) => {
            if (err) {
                response.status(500).send("Error getting tweeds", err.message)

            } else {
                // //  if no error, render and set cookies
                // response.render('tweedr/home', { tweeds: results.rows });

                // set cookie
                console.log(request.cookies.loggedIn);
                if (request.cookies.loggedIn !== "true") {
                    console.log("pass this")
                    response.cookie("loggedIn", false)
                    // render non-user homepage
                    // can bring straight to loginform page
                    response.render('tweedr/loginForm');

                } else {
                    // means user is already logged in
                    const currentLog = request.cookies.loggedIn;
                    request.cookies.loggedIn = currentLog;

                    response.render('tweedr/userHome', { tweeds: results. rows })
                }
            }
        });
    }  // end of home

    const registerForm = (request, response) => {
        response.render('tweedr/registerForm');
    };

    const register = (request, response) => {
        // check if username exist in the table
        // if it does
        db.tweedr.register(request.body, (err) => {

            if (err) {
                console.error("Error registering: ", err);
                response.sendStatus(500);

            } else {
                //response.send("Register - Successful");
                response.redirect('/');
            }
        })
    };  // end of register

    const loginForm = (request, response) => {
        response.render('tweedr/loginForm');
    }

    const login = (request, response) => {
        db.tweedr.login(request.body, (err, results) => {
            // query syntax error
            if (err) {
                console.error("Error getting users: ", err.message);
                //response.sendStatus(400);
                response.send("Query error for users search");
            }

            // check if there is such user
            //console.log(results);
            if (results.rowCount === 0) {
                response.status(403).send('Invalid username/password!');
                //response.send("Invalid username/password");
            } else {
                //console.log(results.rows[0])
                // set cookie
                if (request.cookies.loggedIn === "false" || request.cookies.loggedIn === undefined) {
                    response.cookie("loggedIn", true);
                    response.cookie("username", results.rows[0].username);
                   // response.send("Logged in");
                    response.redirect("/");
                }


            }
        })
    };  // end of login

    const logout = (request, response) => {
        console.log(request.cookies.loggedIn);
        response.cookie("loggedIn", false);
        response.cookie("username", undefined);
        response.redirect('/');
    };  // end of logout

    const createTweed = (request, response) => {
        if (request.cookies.loggedIn === "false") {
            // put status error
            response.send("Please login.")

        } else {
            response.render('tweedr/createTweed');
        }
    }  // end of createTweed

    const tweed = (request, response) => {
        const username = request.cookies.username;
        // add username to request body
        request.body.username = username;

        db.tweedr.tweed(request.body, (err, results) => {
            if (err) {
                console.error("Error posting tweed: ", err.message);
                response.send("Query error for tweeding");

            } else {
                //response.send("Tweed - Successful")
                response.redirect("/")
            }
        })
    };  // end of tweed

    const myTweeds = (request, response) => {

       const username = request.cookies.username;
        db.tweedr.myTweeds(username, (err, results) => {
            if (err) {
                console.error("Error getting personal tweeds", err.message);
                response.send("Query error for personal tweeds");

            } else {
                //response.send(results.rows);
                response.render('tweedr/myTweeds', { tweeds: results.rows })
            }
        })
    };  // end of my tweeds

    const myFollowing = (request, response) => {

        const username = request.cookies.username;
        db.tweedr.myFollowing(username, (err, results) => {
            if (err) {
                console.error("Error getting following: ", err.message);
                response.status(500).send("Please try again");

            } else {
                response.render('tweedr/myFollowing', { following: results.rows })
                //response.send(results.rows);
            }
        })

    };  // end of my following


    //  export controller functions as a module
    return {
        home,
        registerForm,
        register,
        loginForm,
        login,
        logout,
        createTweed,
        tweed,
        myTweeds,
        myFollowing
    };

}