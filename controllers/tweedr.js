module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let indexControllerCallback = (request, response) => {
      db.tweedr.getAll((error, allTweets) => {
        // response.render('tweedr/index', { allTweets });
                response.send({ allTweets });
      });
  };

    let registerControllerCallback = (request, response) => {
        data = {};
        response.render('tweedr/register', data);
  };

  let registerPostControllerCallback = (request, response) => {
        let username = request.body.username;
        let userExists = false;
                const data = {};
      db.tweedr.checkUsers(username, (error, postRegister) => {
        data.user = postRegister;
        // console.log (data.user[0].username) 
        if (data.user != null) {
          console.log ('not null')
        userExists = true;
        data.message = "Username Taken, please try again..."
                response.render('tweedr/register', data);
        }       else { 
        // response.render('tweedr/index', { allTweets });
        // add the user to the database 
        const allData = request.body;
        const SALT = "racketofthesaltyrunlamb";
            const sha256 = require('js-sha256');
              allData.hashedPassword = sha256(allData.password + SALT);
              db.tweedr.addNewUser(allData, (error, postRegister) => {
            console.log({postRegister})

                response.send(data); 
              }
              )};
      });
  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
    register: registerControllerCallback,
    registerPost: registerPostControllerCallback
  };

}
