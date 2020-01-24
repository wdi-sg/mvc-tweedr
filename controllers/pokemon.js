module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let indexControllerCallback = (request, response) => {
      db.pokemon.getAll("users", (error, allUsers) => {
        response.render('tweedr/home', {allUsers});
      });
  };

  let test1 = (request, response) => {
    db.pokemon.getAll("tweed", (err, allTweeds) => {
        response.send("I'm Here!!");
    })
  }


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
    test1
  };

}
