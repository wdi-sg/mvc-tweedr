module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let followControllerCallback = (request, response) => {
    //response.send("hello");
    //console.log(request.body);
    const data = {};
    data.follower_id = request.body.follower_id;
    data.username=request.cookies.username;

    console.log(data);
     db.follow.follow(data,(error, follow) => {
        const data = {}
        data.follow=follow;
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
        response.send("success");
        response.redirect("/");
        //response.render("pokemon/index", data);
      });
  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    follow: followControllerCallback,
  };

}