module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let userPage = (request, response) => {
        let id = request.params.id;
        console.log("THIS" + id);


        db.userpage.getAll(id,(error, result) => {
          let data = {ccb : result};
          response.render('user', data);
          console.log(data.ccb[0].username);
      });
  };




  /**
   * ====================s=======================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: userPage,
  };

}