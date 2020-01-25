module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let indexControllerCallback = (request, response) => {
    //db.tweedr de tweedr comes from db.js de line 98's key
      db.tweedr.getAll((error, allTweedr) => {
        // response.send(allTweedr.name);
        response.render('tweedr/index', { allTweedr });
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