module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let tweedCallback = (request, response) => {
        console.log(request.body);
        // response.render('user');
        let id = request.body.id;
        let tweed = request.body.tweet;
        // console.log(tweed);
        // console.log(id);

        data = {
            userId: id,
            userTweed: tweed
        };
        console.log(data);



        db.tweed.getAll(data,(error, result) => {
              // let data = {ccb : result};
          let urlRoute = 'user/' + id;
          console.log(id);
          console.log(result);
          response.redirect(urlRoute);
          // console.log(data.ccb[0].username);
      });
  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: tweedCallback
  };

}