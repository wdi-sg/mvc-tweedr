const sha256 = require('js-sha256');
const SALT = "shdhs:!DJDSkdmsldsfksjensshdhs:!DJDSkdmsldsfksjens;:!DJDSkdmsldsfksjensshdhs:!DJDSkdmsldsfksjens;"

module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */
    //the routes


    let loginForm = (request, response) => {
        response.render("users/login");
    };


    let loginUser = (request, response) => {
        let newUser = request.body;
        let requestUsername = request.body.name;
        let requestPassword = request.body.password;


        const renderCallback = (error, loggedInUser) => {
            if (err) {
                console.error('query error:', err.stack);
                response.send('query error');
            } else {
                console.log('query result:', result.rows);
                // if this user exists in the db

                if (result.rows.length > 0) {

                    let hashedRequestPassword = sha256(requestPassword + SALT);
                    console.log("hashed request password: " + hashedRequestPassword);

                    // check to see if the password in request.body matches what's in the db
                    //or hashedRequestPassword === requestPassword ?
                    if (hashedRequestPassword === result.rows[0].password) {
                        let user_id = result.rows[0].id

                        let hashedCookie = sha256(SALT + user_id);

                        response.cookie('user_id', user_id);
                        response.cookie('hasLoggedIn', hashedCookie);

                        // if it matches they have been verified, log them in
                        response.send('about to log you in')

                    } else {

                        response.status(403).send('wrong password');
                    }


                    //

                } else {
                    response.status(403).send('wrong username');

                }


                // redirect to home page
                response.render('home');
            }
        };


    };






    //     pool.query(queryString, (err, result) => {

    //         if (err) {
    //             console.error('query error:', err.stack);
    //             response.send('query error');
    //         } else {
    //             console.log('query result:', result.rows);
    //             // if this user exists in the db

    //             if (result.rows.length > 0) {

    //                 let hashedRequestPassword = sha256(requestPassword + SALT);
    //                 console.log("hashed request password: " + hashedRequestPassword);

    //                 // check to see if the password in request.body matches what's in the db
    //                 //or hashedRequestPassword === requestPassword ?
    //                 if (hashedRequestPassword === result.rows[0].password) {
    //                     let user_id = result.rows[0].id

    //                     let hashedCookie = sha256(SALT + user_id);

    //                     response.cookie('user_id', user_id);
    //                     response.cookie('hasLoggedIn', hashedCookie);

    //                     // if it matches they have been verified, log them in
    //                     response.send('about to log you in')

    //                 } else {

    //                     response.status(403).send('wrong password');
    //                 }


    //                 //

    //             } else {
    //                 response.status(403).send('wrong username');

    //             }


    //             // redirect to home page
    //             response.render('home');
    //         }
    //     });

    //     response.render('home');


    // });








    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        loginForm,
        loginUser
    };

}