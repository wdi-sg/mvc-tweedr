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

  let registerControllerCallback = (request, response) => {
    response.render('tweedr/register');
    // response.send('wana register?');
  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
    register: registerControllerCallback
  };

}