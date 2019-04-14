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


//Send a request to create a login form
let loginRequestCallback = (request, response) => {
    response.render('tweedr/login');
};


//Send a request to create a form for a new tweet
let newTweetRequestCallback = (request, response) => {
    response.render('tweedr/newtweet');
};

//Take a new tweet as input
let addNewTweetCallback = (request, response) => {
    const data = {
        tweet: request.body.tweet
    };
    const doneWithQuery = (createdTweet) => {
        console.log("You created a new tweet");
        response.redirect('/');
    };
    db.users.newTweet(data, doneWithQuery);
}


//Send a request to show the home screen
let homeRequestCallback = (request, response) => {
    db.users.allTweet((error, allUsers) => {
      console.log('im allUsers' + allUsers);
      console.log('done');
      response.render('tweedr/home', {allUsers});
    });
}



//++++++++++need to fix this+++++++++++//
//Take login info as input
let loginAuthCallback = (request, response) => {
    const data = {
        name: request.body.username,
        password: request.body.password
    };
    const doneWithQuery = (verifiedUser, auth) => {
        if(auth === 'true') {
            response.send("You have logged in!");
        } else if(auth === 'false') {
            response.status(403).send('password was wrong');
            response.status(403).send('didnt find one');
        }
    }
    db.users.login(data, doneWithQuery);
};





  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    registerRequest: registerRequestCallback,
    registerPost: registerAccountCallback,
    loginRequest: loginRequestCallback,
    loginAuth: loginAuthCallback,
    newTweetRequest: newTweetRequestCallback,
    newTweetPost: addNewTweetCallback,
    homeRequest: homeRequestCallback
  };
};