module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let indexControllerCallback = (request, response) => {
      db.tweeds.getAll((error, tweedsData) => {
        response.render('main/index', { tweeds: tweedsData });
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