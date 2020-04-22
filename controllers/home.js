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