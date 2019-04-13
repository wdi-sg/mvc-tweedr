const SAUNA = 'pickles';
const sha256 = require('js-sha256');

module.exports = (allModels) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let index = (request, response) => {
    // console.log(request.body)
    const data = {
        pic: request.body.pic,
        name: request.body.name,
        message: request.body.message,
        attachment: request.body.photo_attached,
        timestamp: request.body.created_at
    }
    const doneWithQuery = (data) => {
        // console.log(data)
        // response.send(data)
        response.render('tweedr', {tweets:data});
    };
    allModels.tweedr.view(data, doneWithQuery);
  };

  let register = (request, response) => {
    response.render('tweedr/register');
  };

  let registerComplete= (request, response) => {
    const data = {
        name: request.body.name,
        pic: request.body.pic
    }
    let logIn = '<br/><a href="/">use app now and be semi-amazed haha</a>'

    const doneWithQuery = (data) => {
        // console.log(data)
        // response.send(data)
        let hash = sha256(SAUNA + request.body.name);
        response.cookie('username', request.body.name);
        response.cookie('loggedIn', hash);
        response.send('You will be billed $4000 monthly, thank you for registering with us lol loserr' + logIn);

    };
    allModels.tweedr.registerComplete(data, doneWithQuery);
  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: index,
    register: register,
    registerComplete: registerComplete,
  };

}
