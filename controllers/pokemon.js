module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

let register = (request,response) => {
    response.render('registrationForm');
};

let registerDone = (request,response) => {

    const data = {
        username: request.body.username,
        password: sha256(request.body.password + SALT),
        profile_pic: request.body.profile_img
    }

    const submitPassword = {

        console.log(data);
        response.send("Welcome to Tweedr! Quack away!")
    }

    db.register.createUser(data, doneWithQuery); //clarify this function?
};



  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: register,
    register: registerDone,

  };

}