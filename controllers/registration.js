// Hash password
sha256 = require('js-sha256');

// // Set cookies
// const cookieParser = require('cookie-parser');
// app.use(cookieParser());

module.exports = (db) => {
     /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

    let registerPage = (request, response) => {
        response.render('register');
    };

    let register = (request, response) => {
        const username = request.body.username;
        const password = request.body.password;
        const password2 = request.body.password2;

        const whenQueryDone = (userID) => {
          // Set cookies
          response.cookie('loggedIn', 'true');
          response.cookie('username', username);
          response.cookie('userID', userID);

          response.redirect('/');
        }

        // Hash password
        if (password === password2) {
          const hashPassword = sha256(password);
          db.registration.addUser(username, hashPassword, whenQueryDone);
        }
        else{
          response.send('Please re-enter password');
        }

    }


   /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */

   return{
    registerPage: registerPage,
    register: register
   }
}