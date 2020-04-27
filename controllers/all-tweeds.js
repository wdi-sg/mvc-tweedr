module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */


   let allTweedscontroller = (request, response) => {

        db.tweedr.alltweedsCallback((error, result) => {
        if(result === null) {
            response.send("failed");
        } else {
                response.render('all-tweed', {result});
        };
      });
    };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    allTweedscontroller,
  };

};
