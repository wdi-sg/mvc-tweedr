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

    let loginPage = (request, response) => {
        response.render('login');
    };

    let login = (request, response) => {
        const username = request.query.username;
        const password = request.query.password;

        // const whenQueryDone = (userID) => {
        //   // Set cookies
        //   response.cookie('loggedIn', 'true');
        //   response.cookie('username', username);
        //   response.cookie('userID', userID);

        //   response.redirect('/');
        // }

        // Check username and password
        // Hash password
        const hashPassword = sha256(password);

        const userID = db.login.authenticateLogin(username, hashPassword);
        console.log(userID);
    }


   /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */

   return{
    loginPage: loginPage,
    login: login
   }
}