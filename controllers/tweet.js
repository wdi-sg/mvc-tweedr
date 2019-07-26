module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */



  let homeControllerCallback = (request, response) => {

    //db.tweet refer tweet file in modal folder
      db.tweet.getAll((error, result) => {
        console.log("From controller: " + result);

        const data = {
            tweets : result
        }

        response.render('tweet/home', data);
      });
  };




  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    home: homeControllerCallback,
  };

}