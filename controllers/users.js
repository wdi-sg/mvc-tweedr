module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let registerFormCallback = (request, response) => {
        response.render('register');
    };

    let postRegisterCallback = (request, response) => {
        console.log('Registering User');
        db.users.registering(request.body, (error, queryResult) => {
            const data = request.body;
            console.log(queryResult);
            response.render('registered', data);
        });
    };


    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        registerForm: registerFormCallback,
        postRegister: postRegisterCallback
    };

}
