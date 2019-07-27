module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic, all paths are from routes.js
   * ===========================================
   */

   //===========================================

   //home path
    let homeControllerCallback = (request, response) => {

      db.tweet.getAll((error, result) => {          //goes to model
        console.log("From controller: " + result);

        const data = {
            tweets : result
        }

        response.render('tweet/home', data);
      });
  };

    //===========================================

    //get register path
    let getRegisterControllerCallback = (request, response) => {

        response.render('tweet/register');
    };

    //post register path
    let postRegisterControllerCallback = (request, response) => {

        db.tweet.postRegister(request.body, (error, result) => {
        console.log("From controller: " + result);

        response.redirect('/login');
      });
    };

    //===========================================

    //get login path
    let getLoginControllerCallback = (request, response) => {

        response.render('tweet/login');
    };

    //post login path
    let postLoginControllerCallback = (request, response) => {

        response.redirect('/');
    };

    //===========================================

// db.tweet refer tweet file in modal folder
// db.tweet."function" is the link to modal folder (example, "getAll")

// render will go to views folder
// redirect will be route path from routes.js





  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    home: homeControllerCallback,
    getRegister : getRegisterControllerCallback,
    postRegister : postRegisterControllerCallback,
    getLogin: getLoginControllerCallback,
    postLogin: postLoginControllerCallback
  };

}