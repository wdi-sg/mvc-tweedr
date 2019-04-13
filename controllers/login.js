module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let indexControllerCallback = (request, response) => {
        // console.log(request.body);

        let nameTest = request.body;
        let data = {
            username: request.body.username,
            password: request.body.password
        };

        console.log(data);
      db.login.getAll((error, result) => {
        // console.log(result[0]);
        let thing = {ccb : data}
        console.log(thing);
        // console.log(thing);
        response.render('login');
      });


  };


  /**
   * ====================s=======================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
  };

}