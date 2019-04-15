module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  // let indexControllerCallback = (request, response) => {
  //     db.show.show((error, tweedsData) => {
  //       response.render('main/user', { tweeds: tweedsData });
  //     });
  // };

 let show = (request, response) => {

        const data = {
            user_id: request.params.id
        }

        const doneWithQuery = (result) => {
            console.log(data);
            response.render('main/user', {user: result.user, tweeds: result.tweeds});
        }

      db.show.show(data, doneWithQuery);

    };





  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    tweeds: show,

  };

}