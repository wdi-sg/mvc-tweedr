module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let indexControllerCallback = (request, response) => {
      db.tweedr.getAll((error, allTweets) => {
        response.render('tweedr/alltweets', { allTweets });
                // response.send({ allTweets });
      });
  };

    let registerControllerCallback = (request, response) => {
        data = {};
        response.render('tweedr/register', data);
  };

    let loginControllerCallback = (request, response) => {
        data = {};
        response.render('tweedr/login', data);
  };

      let loginPostControllerCallback = (request, response) => {
        const allData = request.body;
        const SALT = "racketofthesaltyrunlamb";
        const sha256 = require('js-sha256');
        let data = {};
        allData.hashedPassword = sha256(allData.password + SALT);
      db.tweedr.checkUsers(allData, (error, postRegister) => {
        data.user = postRegister;
        console.log (data.user[0]);
        if (allData.hashedPassword === data.user[0].password ) {
          console.log ('passwords match')
        }
        else {
           console.log ('passwords NG match')
        }
        // console.log (data.user[0].username) 
         // console.log ({postRegister}) 
                       response.redirect('/login'); 

      });

  };


  let registerPostControllerCallback = (request, response) => {
        let username = request.body.username;
        let userExists = false;

        const allData = request.body;
        const SALT = "racketofthesaltyrunlamb";
        const sha256 = require('js-sha256');
        allData.hashedPassword = sha256(allData.password + SALT);

                const data = {};
      db.tweedr.checkUsers(allData, (error, postRegister) => {
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

              db.tweedr.addNewUser(allData, (error, postRegister) => {
            console.log({postRegister})

                response.redirect('/tweedr'); 
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
    login: loginControllerCallback,
    loginPost: loginPostControllerCallback,
    register: registerControllerCallback,
    registerPost: registerPostControllerCallback
  };

}
