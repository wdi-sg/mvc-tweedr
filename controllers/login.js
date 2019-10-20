const sha256 = require('js-sha256')


module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let loginControllerCallbacks = (request, response) => {
        response.render('users/login');
    };

    let postLoginControllerCallbacks = (request, response) => {
        let loginInfo = request.body;
        console.log("logging in", loginInfo);
        db.login.loggingIn(loginInfo, (error, postLogin) => {
            if (postLogin) {
                console.log("postLogin", postLogin);
                let hashedUsernameCookie = sha256(postLogin[0].username);
                response.cookie("username", hashedUsernameCookie)
                response.cookie("loggedIn", postLogin[0].id);
                response.redirect('tweets');
            } else {
                response.render('users/loginfail')
            }

        })
    }

    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        index: loginControllerCallbacks,
        login: postLoginControllerCallbacks,
    };

}