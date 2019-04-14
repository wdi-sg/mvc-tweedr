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
        response.render('login');
  };


  let kiwi = (request, response) => {
        // console.log(request.body);

        let nameTest = request.body;
        let data = {
            username: request.body.username,
            password: request.body.password
        };
        console.log(data);
        // response.send('login');

        db.login.getAll((error, result) => {
        console.log(result);
        let thing = {ccb : result}
        response.render('login', thing);
      });
  };


  /**
   * ====================s=======================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
    userVerify: kiwi
  };

}