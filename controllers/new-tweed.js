module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */


  let newTweedFormController = (request, response) => {
        let userId = request.cookies.user_id;
        let data = {
             cookieUserId : userId
        }
        response.render('newtweed', data);
  };

  let newTweedPost = (request, response) => {

        let userId = request.cookies.user_id;
        let contentInput = request.body.content;

        db.tweedr.createtweedsCallback(userId, contentInput,(error, result) => {
        if(result === null) {
            response.send("failed")
        } else {
            response.send("tweed successfully tweeded into the tweed cloud you can go to your home page to view the tweed :)");
        };
      });
  };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    newTweedFormController,
    newTweedPost,
  };

}
