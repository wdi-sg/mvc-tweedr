module.exports = (db) => {
    //  controller logic

    // const setCookie = (username) => {
    //     if (request.cookies === undefined {
    //         response.cookie('loggedIn', false)
    //         reponse.cookie('username', username)

    //     } else {
    //         response.cookie('loggedIn', true);
    //         response.cookie('username', username);
    //     }
    // }

    const home = (request, response) => {
        setCookie(false);
        response.render('tweedr/home');
    }

    const registerForm = (request, response) => {
        response.render('tweedr/registerForm');
    };

    const register = (request, response) => {
        //  use tweedr model method 'register' to create new user entry in db
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
                setCookie(results.rows[0].username)
                response.send("Logged in");
            }
        })

    };  // end of login

    const createTweed = (request, response) => {
        response.render('tweedr/createTweed');
    }


    //  export controller functions as a module
    return {
        home,
        registerForm,
        register,
        loginForm,
        login,
        createTweed
    };

}