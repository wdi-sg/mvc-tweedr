module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let indexControllerCallback = (request, response) => {
      db.tweedr.getAll((error, allTweets) => {
        // response.render('tweedr/index', { allTweets });
                response.send({ allTweets });
      });
  };

    let registerControllerCallback = (request, response) => {
        data = {};
        response.render('tweedr/register', data);
  };

  let registerPostControllerCallback = (request, response) => {
        let username = request.body.username;
      db.tweedr.checkUsers((error, postRegister) => {
                data = {};
        // response.render('tweedr/index', { allTweets });
                response.send({postRegister});
      });
  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
    register: registerControllerCallback,
    registerPost: registerPostControllerCallback
  };

}
