module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic, all paths are from routes.js
   * ===========================================
   */

   //===========================================

   //home path
    let homeControllerCallback = (request, response) => {

      db.tweet.getAll((error, result) => {          //goes to model,getAll function
        console.log("From controller: " + result);

        const data = {
            tweets : result
        }

        response.render('tweet/home', data);    //goes to views
      });
  };

    //===========================================

    //get register path
    let getRegisterControllerCallback = (request, response) => {

        response.render('tweet/register'); //goes to views
    };

    //post register path
    let postRegisterControllerCallback = (request, response) => {

        db.tweet.postRegister(request.body, (error, result) => {    //goes to model, postRegister function
        console.log("From controller: " + result);

        response.redirect('/login'); //redirect to routes, get login form
      });
    };

    //===========================================

    //get login path
    let getLoginControllerCallback = (request, response) => {

        response.render('tweet/login'); //goes to views
    };

    //post login path
    let postLoginControllerCallback = (request, response) => {

        response.redirect('/'); //redirect to routes, get home
    };

    //===========================================

    //get new tweet path
    let getNewControllerCallback = (request, response) => {
        console.log("getting new tweet");
        response.render('tweet/new'); //goes to views
    };

    //post new tweet path
    let postNewControllerCallback = (request, response) => {
        console.log("posting new tweet");
        db.tweet.postNew(request.body, (error, result) => {    //goes to model postNew function
        console.log("From controller: " + result);

        response.render('tweet/user');  //goes to views
      });

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

    // routes.js : function name above
  return {
    home: homeControllerCallback,
    getRegister : getRegisterControllerCallback,
    postRegister : postRegisterControllerCallback,
    getLogin : getLoginControllerCallback,
    postLogin : postLoginControllerCallback,
    getNew : getNewControllerCallback,
    postNew : postNewControllerCallback
  };

}