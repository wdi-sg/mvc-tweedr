const SALT = "racketofthesaltyrunlamb";
const sha256 = require('js-sha256');

module.exports = (db) => {


  let userLogged = false;

  const loggedIn = function (request) {
   // see if they are logged in?
    if (sha256(request.cookies['tweedr_user'] + SALT) === request.cookies['tweedr_nr'] ){  
    return true;
    } 
  }
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */


    let logoutControllerCallback = (request, response) => {
        data = {};
        // response.cookie = 'tweedr_nr=; Max-Age=0';
        response.cookie('tweedr_nr', '');
        response.cookie('tweedr_user', '');
        // response.cookie = "tweedr_nr=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        response.redirect('/');
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
        let data = {};
        allData.hashedPassword = sha256(allData.password + SALT);
        db.tweedr.checkUsers(allData, (error, postRegister) => {
        data.user = postRegister;
        if (data.user != null) {        
              if (allData.hashedPassword === data.user[0].password ) {
                // console.log ('passwords match')
                              // console.log (data.user[0].username) 
               // console.log ({postRegister}) 
               // lets get em cookied
            let currentSessionCookie = sha256( allData.username + SALT );
            response.cookie('tweedr_user', allData.username);
            response.cookie('tweedr_nr', currentSessionCookie);


                response.redirect('/tweedr'); 
              }
              else {
                 // console.log ('passwords NG match')
                               // console.log (data.user[0].username) 
               // console.log ({postRegister}) 
                data.message = "Username or password invalid..."
                response.render('tweedr/login', data); 

              }

        } else {
            // console.log ('user NG match')
            data.message = "Username or password invalid..."
          response.render('tweedr/login', data); 
        }

      });

  };


  let registerPostControllerCallback = (request, response) => {
        let username = request.body.username;
        let userExists = false;

        const allData = request.body;


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
    login: loginControllerCallback,
    loginPost: loginPostControllerCallback,
    logout: logoutControllerCallback,
    register: registerControllerCallback,
    registerPost: registerPostControllerCallback,
  };

}
