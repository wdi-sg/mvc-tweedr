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

  let login = (request, response) => {
    response.render('tweedr/login');
  };

  let loginComplete= (request, response) => {
    const data = {
        name: request.body.name,
        password: request.body.password,
        pic: request.body.pic
    }
    let logIn = '<br/><a href="/">use app now and be semi-amazed haha</a>'

    const doneWithQuery = (data) => {
        console.log("FUCKFUCKFCUK")
        console.log(data.password);
        console.log("second fuck")
        console.log(sha256(request.body.password + SAUNA));
        console.log("data.length: " + data.length)
        console.log(data)
        if( data.name == request.body.name) {
            let hash = sha256(request.body.password + SAUNA);

            if( hash == data.password ) {
                let hash = sha256(data.name + SAUNA);
                response.cookie('username', data.name);
                response.cookie('loggedIn', hash);
                response.send('ok can go use the app' + logIn);
            } else {
                response.send('password was wrong, r u even trying bro');
            }
        } else {
            response.send('wrong sia, $1 3tries');
        }
    };
    allModels.tweedr.logIn(data, doneWithQuery);
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
    login: login,
    loginComplete: loginComplete,
  };

}
