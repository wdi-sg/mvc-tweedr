module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let userAllControllerCallback = (request, response) => {
    //response.send("hello from all user");
        let username=request.cookies.username;
         db.user.allUsers(username,(error, users) => {
        const data = {}
        data.users=users;
        //response.send(data);
        let username= request.cookies.username;
        if(username===undefined)
        {
            data.name="guest";
        }
        else
        {
            data.name= username;
        }
        //response.send(data);
        response.render("user/allusers", data);
      });

  };


//////////// Individual ID
  let userProfileControllerCallback = (request, response) => {
    //response.send("hello from user profile");
    console.log(request.params.username);
        let username=request.cookies.username;
         db.user.userProfile(username,(error, users) => {
        const data = {}
        data.users=users;
        //response.send(data);
        response.render("user/profile", data);
      });

  };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    userAll: userAllControllerCallback,
    userProfile: userProfileControllerCallback,
  };

}