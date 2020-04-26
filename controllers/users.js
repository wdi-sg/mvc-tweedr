module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let registerFormCallback = (request, response) => {
        response.render('users/register');
    };

    let postRegisterCallback = (request, response) => {
        console.log('Registering User');
        response.cookie('registered', true);
        response.cookie('loggedin', true);

        db.users.registering(request.body, (error, queryResult) => {
            const data = request.body;
            console.log(queryResult);
            response.render('users/registered', data);
        });
    };

    let loginFormCallback = (request, response) => {
        response.render('users/login');
    };

    let postLoginCallback = (request, response) => {
        console.log('Logging In User');
        response.cookie('loggedin', true);

        db.users.loggedin(request.body, (error, queryResult) => {
            const data = queryResult.rows[0];
            console.log(queryResult.rows[0]);
            response.render('users/loggedin', data);
        });
    };


    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        registerForm: registerFormCallback,
        postRegister: postRegisterCallback,
        loginForm: loginFormCallback,
        postLogin: postLoginCallback
    };

}
