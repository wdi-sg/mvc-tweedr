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
                response.render('tweedr/home');
            } else {
                response.send('Password Invalid')
            } //else close
        });
    };

    let register = (request, response) => {
        db.main.checkUsers
    }

    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        index,
        login,
        register
    };

}