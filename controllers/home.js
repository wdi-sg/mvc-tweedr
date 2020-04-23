module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let indexControllerCallback = (request, response) => {
    //response.send("hello");
     db.home.getTweet((error, tweets) => {
        const data = {}
        data.tweets=tweets;
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
        data.isLogin=request.cookies.isLogin
        response.render("pokemon/index", data);
      });
  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
  };

}