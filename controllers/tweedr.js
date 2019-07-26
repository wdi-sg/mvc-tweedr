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
        if (cookieLogin) {
            db.tweedr.getAll(request.cookies["user_id"],(error, result) => {
                let data = {
                    result: result,
                    title: "Home",
                    cookieLogin: cookieLogin,
                    cookieUser: request.cookies["user_name"],
                    cookieUserId: request.cookies["user_id"]
                }
                response.render('tweedr/index', data);
            });
        } else {
            response.redirect('/tweedr/login');
        }

    };

    let loginControllerCallback = (request, response) => {
        let cookieLogin = (sha256(request.cookies["user_id"] + 'logged_in' + SALT) === request.cookies["logged_in"]) ? true : false;
        if (cookieLogin) {
            response.send("YOU ARE ALREADY LOGGED IN");
        } else {
            let data = {
                title: "Login",
                cookieLogin: cookieLogin,
                cookieUser: request.cookies["user_name"],
                cookieUserId: request.cookies["user_id"]
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
                cookieUser: request.cookies["user_name"],
                cookieUserId: request.cookies["user_id"]
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
                cookieUserId: request.cookies["user_id"]
            }
            response.render('tweedr/add_tweet', data);
        } else {
            response.send("YOU ARE NOT LOGGED IN");
        };
    }

    let singleUserControllerCallback = (request, response) => {
        let cookieLogin = (sha256(request.cookies["user_id"] + 'logged_in' + SALT) === request.cookies["logged_in"]) ? true : false;
        db.tweedr.getSingleUser(request.params.id, (error, result) => {

            let data = {
                result: result,
                title: result.name,
                cookieLogin: cookieLogin,
                cookieUser: request.cookies["user_name"],
                cookieUserId: request.cookies["user_id"],
                followed: false,
                profile_id: request.params.id
            }
            db.tweedr.countFollower(request.params.id, (error, result) => {
                data["followerCount"] = parseInt(result);
                db.tweedr.countFollowing(request.params.id, (error, result) => {
                    data["followingCount"] = parseInt(result);
                    if (cookieLogin) {
                        db.tweedr.checkIfFollowed(request.params.id, request.cookies["user_id"], (error, result) => {
                            if (result) {
                                data["followed"] = true;
                            }
                            response.render('tweedr/singleUser', data);
                        })
                    } else {
                        response.render('tweedr/singleUser', data);
                    }
                })
            })



        });
    }

    let followerListControllerCallback = (request, response) => {
        let cookieLogin = (sha256(request.cookies["user_id"] + 'logged_in' + SALT) === request.cookies["logged_in"]) ? true : false;
        if (cookieLogin) {
            db.tweedr.getFollower(request.cookies["user_id"], (error, result) => {
                let data = {
                    result: result,
                    title: "Followers",
                    cookieLogin: cookieLogin,
                    cookieUser: request.cookies["user_name"],
                    cookieUserId: request.cookies["user_id"]
                }
                response.render('tweedr/followers', data);
            });
        } else {
            response.send("YOU ARE NOT LOGGED IN");
        };

    }

    let followingListControllerCallback = (request, response) => {
        let cookieLogin = (sha256(request.cookies["user_id"] + 'logged_in' + SALT) === request.cookies["logged_in"]) ? true : false;
        if (cookieLogin) {
            db.tweedr.getFollowing(request.cookies["user_id"], (error, result) => {
                let data = {
                    result: result,
                    title: "Following",
                    cookieLogin: cookieLogin,
                    cookieUser: request.cookies["user_name"],
                    cookieUserId: request.cookies["user_id"]
                }
                response.render('tweedr/following', data);
            });
        } else {
            response.send("YOU ARE NOT LOGGED IN");
        };
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
        single_user: singleUserControllerCallback,
        follower_list: followerListControllerCallback,
        following_list: followingListControllerCallback
    };

}