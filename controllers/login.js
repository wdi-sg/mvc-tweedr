module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let loginPage = (request, response) => {
        // console.log(request.body);
        response.render('login');
  };


  let userCheck = (request, response) => {
        // console.log(request.body);

        let nameTest = request.body;
        let data = {
            username: request.body.username,
            password: request.body.password
        };
        console.log(data);
        // response.send('login');

        db.login.getAll(data,(error, result) => {
        let thing = {ccb : result}
        console.log(thing);
        console.log(result);
        console.log(result[0].id);

        let routeId = 'user/' + result[0].id;
        console.log(routeId);

        if (result === null) {
            response.send("INVALID LOG IN DETAILS!");
        } else if (data.username == result[0].username && data.password == result[0].password) {
            // response.send("YAYYYYYYYY");
            response.redirect(routeId);
            //THIS DIRECTS TO THE USER TWEET PAGE
        }
      });
  };


  /**
   * ====================s=======================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: loginPage,
    userVerify: userCheck
  };

}