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

      let userProfileTweets;

      let followingRelationship;

      let promise1 = new Promise((resolve, reject) => {
        // Get user profile
        db.profile.getProfile(userProfileID)
          .then(results => {
            userProfileTweets = results.rows
            resolve();
          })
          .catch(err => {
            console.error(err.stack);
          });
      })

      let promise2 = new Promise((resolve, reject) => {
        // Get following relationship
        db.profile.getFollower(userProfileID, userID)
          .then(results => {
            followingRelationship = results.rows;
            console.log(followingRelationship)
            resolve();
          })
          .catch(err => {
            console.error(err.stack);
          });

      })

      Promise.all([promise1, promise2]).then(() => {
        if(followingRelationship.length === 0){
          followingRelationship = false;
        }
        else{
          followingRelationship.forEach(el => {
            if(el.follower_id == userID){
              followingRelationship = true;
            }
            else{
              followingRelationship = false;
            }
          })
        }

        console.log("following relationship: " + followingRelationship)

        data = {"userProfileTweets" : userProfileTweets, "userProfileName" : userProfileName, "username" : username, "userID" : userID, "loggedIn" : loggedIn, "followingRelationship" : followingRelationship};

        response.render('profile', data);
      })

   }

   let followProfileController = (request, response) => {
      const followeeID = request.body.userProfileID;
      const followerID = request.cookies.userID;

      const userProfileName = request.body.userProfileName;

      db.profile.followProfile(followerID, followeeID)
        .then(results => {
          console.log(results.rows)
          response.redirect(`/profile/${followeeID}/${userProfileName}`);
        })
   }

   /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */

   return{
    profile: profilePageController,
    follow: followProfileController
   }
}