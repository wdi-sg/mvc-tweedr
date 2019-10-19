const sha256 = require('js-sha256');

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let loginControllerCallback = (request, response) => {
    response.render('login')
  };

  let registerControllerCallback = (request, response) => {
    response.render('register')
  };

  let successControllerCallback = (request,response) => {
    let user = request.body.username
    let password = request.body.password
    let hashedPw = sha256(request.body.password)

        db.pokemon.verifyUser(user,(foundUser)=>{

        if (foundUser === null){

            db.pokemon.registerUser(user,hashedPw,(registered)=>{
                console.log("Registered " + registered)
                response.redirect('/login')

            })
        } else {
            const data = {
                    fail: true
                }
                response.render('register',data)
        }
    });
  }

  let verifyControllerCallback = (request,response)=>{
    let user = request.body.username
    let password = request.body.password
    let hashedPw = sha256(request.body.password)

    console.log(user, password, hashedPw)

    db.pokemon.verifyUser(user,(foundUser)=>{

        console.log("some password " + foundUser.password)

        if (foundUser === null){
            response.send('No such person')
        } else {

            if (foundUser.username === user && foundUser.password === hashedPw){

                response.cookie('loggedin', 'yay');
                response.cookie('userid',foundUser.id);
                response.cookie('username', foundUser.username);


                response.redirect('/profiles/'+foundUser.id)

            } else {

                const data = {
                    fail: true
                }
                response.render('login',data)
            }

        }
    });
  }

    let tweedControllerCallback = (request,response)=>{

        //put in a cookie to allow username to display on tweet page

        response.render('tweed')
    }

  let tweedOutControllerCallback = (request,response)=>{
    let tweed = request.body.tweed
    let userId = request.cookies.userid

    console.log(tweed, userId)

    db.pokemon.sendTweed(tweed, userId,(tweeded)=>{
       console.log(tweeded)

       response.send('Wow, look at your tweed: ' + tweeded.tweet)
    });
  }


   let indexControllerCallback = (request, response) => {

      db.pokemon.getAll((error, allTweets) => {

        const data = {
            tweets: allTweets
        }

        response.render('index', data)
      });
  };

  let profileControllerCallback = (request,response)=>{
    console.log("cookie name" + request.cookies.username)

     const userInfo = {
        name: request.cookies.username
    }
    response.render('profile',userInfo)
  }

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
    login: loginControllerCallback,
    register: registerControllerCallback,
    success: successControllerCallback,
    verify: verifyControllerCallback,
    tweed: tweedControllerCallback,
    tweedOut: tweedOutControllerCallback,
    profile: profileControllerCallback,
  };

}