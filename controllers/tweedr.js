module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */
    let redirectControllerCallback = (request, response) => {
        response.redirect('/tweedr');
    };


    let indexControllerCallback = (request, response) => {
        db.tweedr.getAll((error, result) => {
            let data = {
                result: result,
                title: "Home"
            }
            response.render('tweedr/index', data);
        });
    };

    let loginControllerCallback = (request, response) => {
        let data = {
            title: "Login"
        }
        response.render('tweedr/login', data);
    };

    let registerControllerCallback = (request, response) => {
        let data = {
            title: "Register"
        }
        response.render('tweedr/register', data);
    };





    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        index: indexControllerCallback,
        login: loginControllerCallback,
        redirect: redirectControllerCallback,
        register:registerControllerCallback
    };

}