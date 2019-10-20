module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let registerControllerCallbacks = (request, response) => {
        response.render('users/register');
    };

    let registerPostControllerCallback = (request, response) => {
        let userInfo = request.body;
        console.log("trying to insert new user")
        db.register.registerNew(userInfo, (error, postRegister) => {
            console.log(postRegister)

            response.redirect('login');
        })
    };

    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        index: registerControllerCallbacks,
        registerPost: registerPostControllerCallback,
    };

}