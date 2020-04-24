var sha256 = require('js-sha256');

module.exports = (db) => {


  let homeControllerCallback = (request, response) => {
    response.render('./tweedr/home');
  }

  let registerControllerCallback = (request, response) => {
    response.render('./tweedr/register')
  }

  let loginControllerCallback = (request, response) => {
    response.render('./tweedr/login')
  }

  let tweetControllerCallback = (request, response) => {
    response.render('./tweedr/tweets')
  }

  let registerPostControllerCallback = (request, response) => {

    const userName = request.body.name;
    const userPassword = sha256(request.body.password);

    const callback = (error, queryResponse) => {
      if(error){
        console.log(error);
      }else{
        response.render('./tweedr/tweets')
      }

    }

    db.tweedr.addUser(userName, userPassword, callback);

  }

  //db.tweedr.registerPostControllerCallback;
















  return {
    home: homeControllerCallback,
    register: registerControllerCallback,
    login: loginControllerCallback,
    tweets: tweetControllerCallback,
    registerPost: registerPostControllerCallback
  }
}
