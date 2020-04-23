module.exports = (db) => {
     /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

   let profilePageController = (request, response) => {
      // Get user profile id
      const userProfileID = request.params.id;

      // Get user profile name
      const userProfileName = request.params.user;

      // Get user details from cookies
      const username = request.cookies.username;
      const userID = request.cookies.userID;
      const loggedIn = request.cookies.loggedIn;

      // Get user profile
      db.profile.getProfile(userProfileID)
        .then(results => {
          const userProfileTweets = results.rows
          data = {"userProfileTweets" : userProfileTweets, "userProfileName" : userProfileName, "username" : username, "userID" : userID, "loggedIn" : loggedIn};
          response.render('profile', data);
        })
        .catch(err => {
          console.error(err.stack);
        })
   }

   /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */

   return{
    profile: profilePageController
   }
}