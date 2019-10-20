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
        console.log("logging in");
        db.login.loggingIn(loginInfo, (error, postLogin) => {
            console.log("postLogin", postLogin);

            response.redirect('tweets');
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