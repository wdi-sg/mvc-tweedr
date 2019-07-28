module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let indexControllerCallback = (request, response) => {
      db.tweets.getAll((error, result) => {
        // console.log(result[0]);
        let home = {data : result}
        // console.log(home);
        response.render('homepage', home);
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