module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let indexControllerCallback = (request, response) => {
     let num = request.params.id;
      db.users.getAll(num,(error, result) => {
        console.log(result);
        let thing = {ccb : result}
        response.render('homepage', thing);
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