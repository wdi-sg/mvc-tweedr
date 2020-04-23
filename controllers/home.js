module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let indexControllerCallback = (request, response) => {
    //response.send("hello");
     db.home.getTweet((error, fullData) => {
        const data = {}
        data.tweets=fullData.tweets;
        data.hash=fullData.hash;
        //response.send(fullData);
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