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

    let newTweedForm = (request, response) => {
        if (request.cookies.userId) {
            let data = {
                userId : request.cookies.userId
            }
            response.render('tweedr/write', data);
        }
    };

    let showTweed = (request, response) => {
        let messageId = request.params.id;
        db.main.getTweed(messageId, (error, messageDetails) => {
            if (messageDetails === null) {
                response.send("Message does not exist")
            } else {
                let data = messageDetails;
                response.render('tweedr/tweed', data);
            }
        })
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
        });
    };


    let addTweed = (request, response) => {
        let tweed = {
            message : request.body.message,
            owner_id : request.body.owner_id
        };
        db.main.addTweed(tweed, (error, tweedId) => {
            if (error) {
                response.send("SOMETHING IS WRONG IN ADDTWEED");
            } else {
                let url = '/tweeds/' + tweedId.id;
                response.redirect(url);
            }
        });
    };

    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        index,
        login,
        regForm,
        register,
        newTweedForm,
        addTweed,
        showTweed
    };

}