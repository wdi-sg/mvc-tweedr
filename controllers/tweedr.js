const sha256 = require("js-sha256");

module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let registerUsers = (request, response) => {
        const whenLoad = (err) => {
            console.log("send reg info yo")
            response.render('register');
        }
        db.tweedr.getUsers(whenLoad);
    };

    let registerUsersPost = (request, response) => {
        let name = request.body.name;
        let password = request.body.password;
        let hashedPassword = sha256(password);
        let data = {
            username: name,
            password: hashedPassword
        };
        db.tweedr.register((err, data, result) => {
            if (err) {
                response.send("404");   
            } else {
                response.render('index', data)
                // response.redirect("/");
            }
        }, data)
    }
  
    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
    //   index: indexControllerCallback,
    //   students: studentsControllerCallback,
      register: registerUsers,
      registerPost: registerUsersPost
    };
  
  }
  