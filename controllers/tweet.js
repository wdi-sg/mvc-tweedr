module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let tweetAddControllerCallback = (request, response) => {
    //response.send(request.body);
    let user=request.body;
         db.tweet.tweet(user,(error, users) => {
  /*      const data = {}
        data.users=users;
        console.log(data);
        //response.send(data);
            response.redirect("/");*/
            response.redirect("/");
        //response.send("Success ");
        //response.render("user/allusers", data);
      });

  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    tweetAdd: tweetAddControllerCallback,
  };

}