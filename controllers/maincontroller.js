  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  // let indexControllerCallback = (request, response) => {
  //     db.tweedr.getAll((error, allTweedr) => {
  //       response.render('tweedr/home', { allTweedr });
  //     });
  // };
module.exports = (db) => {

//Send a request to create a register form
let registerRequestCallback = (request, response) => {
    response.render('tweedr/register');
  };

//Take register input
let registerAccountCallback = (request, response) => {
    // console.log("im request.body" + request.body);

    const data = {
      name: request.body.username,
      password: request.body.password
    };

    const doneWithQuery = (createdUser) => {
      // console.log("DONE query but I'm inside CONTROLLER");
      response.send("WELCOME TO TWEEDR!");
    };

    db.users.register(data, doneWithQuery);
};

let loginRequestCallback = (request, response) => {

};

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    registerRequest: registerRequestCallback,
    registerPost: registerAccountCallback
  };
};