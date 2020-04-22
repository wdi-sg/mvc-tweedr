const sha256 = require('js-sha256');

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let indexControllerCallback = (request, response) => {
      db.tweets.getAll((error, allTweets) => {
        response.render('tweets/index', { allTweets });
      });
  };

  let registerControllerCallback = (request, response) => {
    response.render('tweets/register');
      // db.tweets.getAll((error, allTweets) => {
      //   response.render('/tweets/register', { allTweets });
      // });
  };

    let registerFormControllerCallback = (request, response) => {
        let enteredUserId = 'Hwee Meng';
        let enteredPassword = sha256('handsome');
        console.log('**********');
        console.log(enteredPassword);
      db.tweets.register(enteredUserId,enteredPassword,(error, registerUser) => {
        respnose.send('Successfully registered');
        // response.render('/tweets/register', { registerUser });
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
    registerForm: registerFormControllerCallback
  };

}