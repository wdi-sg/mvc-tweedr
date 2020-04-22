module.exports = (db) => {
     /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

    let homePageControllerCallback = (request, response) => {
        const loggedIn = request.cookies.loggedIn;

        if (loggedIn === 'true'){
            const username = request.cookies.username;
            const userID = request.cookies.userID;

            const data = {'loggedIn': loggedIn, 'username': username, 'userID': userID}
            response.render('home', data);
        }
        else{
            const data = {'loggedIn': loggedIn}
            response.render('home', data);
        }

    };

   /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */

   return{
    index: homePageControllerCallback,
   }
}