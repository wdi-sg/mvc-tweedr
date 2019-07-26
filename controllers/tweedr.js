var sha256 = require('js-sha256');
const SALT = "PUTANG INA MO";
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
        let cookieLogin = (sha256(request.cookies["user_id"] + 'logged_in' + SALT) === request.cookies["logged_in"]) ? true : false;
        db.tweedr.getAll((error, result) => {
            let data = {
                result: result,
                title: "Home",
                cookieLogin: cookieLogin,
                cookieUser: request.cookies["user_name"],
            }
            response.render('tweedr/index', data);
        });
    };

    let loginControllerCallback = (request, response) => {
        let cookieLogin = (sha256(request.cookies["user_id"] + 'logged_in' + SALT) === request.cookies["logged_in"]) ? true : false;
        if (cookieLogin) {
            response.send("YOU ARE ALREADY LOGGED IN");
        } else {
            let data = {
                title: "Login",
                cookieLogin: cookieLogin,
                cookieUser: request.cookies["user_name"]
            }
            response.render('tweedr/login', data);
        }

    };

    let registerControllerCallback = (request, response) => {
        let cookieLogin = (sha256(request.cookies["user_id"] + 'logged_in' + SALT) === request.cookies["logged_in"]) ? true : false;
        if (cookieLogin) {
            response.send("YOU ARE ALREADY LOGGED IN");
        } else {
            let data = {
                title: "Register",
                cookieLogin: cookieLogin,
                cookieUser: request.cookies["user_name"]
            }
            response.render('tweedr/register', data);
        };
    }

    let logoutUserControllerCallback = (request, response) => {
        response.cookie('logged_in', sha256(SALT));
        response.redirect("/tweedr");
    }

    let addTweetControllerCallback = (request, response) => {
        let cookieLogin = (sha256(request.cookies["user_id"] + 'logged_in' + SALT) === request.cookies["logged_in"]) ? true : false;
        if (cookieLogin) {
            let data = {
                title: "Add Tweet",
                cookieLogin: cookieLogin,
                cookieUser: request.cookies["user_name"],
                user_id: request.cookies["user_id"]
            }
            response.render('tweedr/add_tweet', data);
        } else {
            response.send("YOU ARE NOT LOGGED IN");
        };
    }

    let singleUserControllerCallback = (request, response) => {
        let cookieLogin = (sha256(request.cookies["user_id"] + 'logged_in' + SALT) === request.cookies["logged_in"]) ? true : false;
        db.tweedr.getSingleUser(req.params.id,(error, result) => {
            let data = {
                result: result,
                title: "Home",
                cookieLogin: cookieLogin,
                cookieUser: request.cookies["user_name"],
            }
            response.render('tweedr/singleUser', data);
        });
    }



    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        index: indexControllerCallback,
        login: loginControllerCallback,
        redirect: redirectControllerCallback,
        register: registerControllerCallback,
        logout_user: logoutUserControllerCallback,
        add_tweet: addTweetControllerCallback,
        single_user: singleUserControllerCallback
    };

}