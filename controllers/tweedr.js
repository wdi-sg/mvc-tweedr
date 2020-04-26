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

  let loginPostControllerCallback = (request,response) => {

    const userName = request.body.name;
    const requestPassword = sha256(request.body.password);

    const callback = (error, queryResponse) => {
      if(error){
        console.log(error);
        response.status(403);
        response.send("sorry!!!!!!!");
      }else{
        response.cookie('logged in', 'true');
        //response.send("you are you!");
        response.render('./tweedr/tweets')
      }

  }
    db.login.userLogin(userName, requestPassword, callback);

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

    db.registration.addUser(userName, userPassword, callback);

  }

  let tweetPostControllerCallback = (request, response) =>{
    const userMessage = request.body.message;

    const callback = (error, queryResponse) => {
      if(error){
        console.log(error);
        console.log("erroorrrrr of message");
      }else{
        response.render('./tweedr/tweets')
      }
    }
    db.tweedr.addTweet(userMessage, callback);

  }
















  return {
    home: homeControllerCallback,
    register: registerControllerCallback,
    login: loginControllerCallback,
    tweets: tweetControllerCallback,
    registerPost: registerPostControllerCallback,
    tweetPost: tweetPostControllerCallback,
    loginPost: loginPostControllerCallback
  }
}
