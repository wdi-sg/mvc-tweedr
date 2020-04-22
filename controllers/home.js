module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let homeModelCallback = (request, response) => {
      db.home.getHome((error, homeData) => {
        response.render('tweed/index', { homeData });
      });
  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    homeModelCallback: homeModelCallback,
  };
}
