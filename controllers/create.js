module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */


    let sentTweed = (request, response) => {

        const data = {
            content: request.body.content,
            user_id: request.params.id
        }

        const doneWithQuery = (data) => {
            console.log(data);
            response.render('main/user', {tweeds: data.tweeds, user: data.user});
        }

      db.send.sendTweed(data, doneWithQuery);

    };




  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    tweed: sentTweed,
  };

}