const sha256 = require('js-sha256');
const SALT = "Gong Xi Fa Cai";

module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let index = (request, response) => {
        db.main.getAll("users", (error, allUsers) => {
            response.render('tweedr/home', {allUsers});
        });
    };

    let login = (request, response) => {
        db.main.login(request.body.username, (error, userDetails) => {
            if (userDetails === null) {
                response.send('Username Invalid');
            }
            let passhash = sha256(request.body.password+SALT);
            if (userDetails.passhash === passhash) {
                response.cookie("logSess", sha256(userDetails.username + SALT))
                response.cookie("userId", userDetails.id)
                response.render('tweedr/home');
            } else {
                response.send('Password Invalid')
            } //else close
        });
    };

    let regForm = (request, response) => {
        let data = {};
        response.render('tweedr/register', data);
    };


    let register = (request, response) => {
        let username = request.body.username
        db.main.checkUsers(username, (error, userDetails) => {
            if (userDetails !== null) {
                let data = {
                    response : "Username already exists."
                };
                response.render('tweedr/register', data);
            } else {
                const newUser = {
                    username : username,
                    passhash : sha256(request.body.password + SALT)
                };
                db.main.addUsers(newUser, (error, userId) => {
                    if (error !== null) {
                        response.send("SOMETHING WENT WRONG!");
                    } else {
                        response.cookie("logSess", sha256(userId.id+SALT));
                        response.cookie("userId", userId.id);
                        response.redirect('/');
                    }
                })
            }
        })
    }

    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        index,
        login,
        regForm,
        register
    };

}