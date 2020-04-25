module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */
    let registerControllerCallback = (request, response) => {
        response.render('register');
    };
    let loginControllerCallback = (request, response) => {
        response.render('login');
    };
    let homeControllerCallback = (request, response) => {
        //db.model.function
        db.tweedr.home((error, result) => {
            const data = {
                result
            }
            response.render('index', data);
        });
    };
    let newTweetControllerCallback = (request,response) => {
      response.render('new');
    }
    let registerNewUserCallback = (request, response) => {
        // console.log('register new user callback');
        // response.send('register new user callback');
        let name = request.body.username;
        let password = request.body.password;
        db.tweedr.register(name, password, (error, result) => {
            if (error) {
                response.send(error);
                return;
            }
            console.log(result);
            response.send('user added.');
        })
    };

    let loginUserCallBack = (request, response) => {
        let name = request.body.username;
        let password = request.body.password;
        db.tweedr.login(name, password, (error, result) => {
            if (error) {
                response.send(error);
                return;
            }
            console.log('login user callback');
            response.send('logged in.');
        })
    };
    let newTweetPostCallBack = (request,response) => {
      let content = request.body.content;
      db.tweedr.newTweet(content),(error,result) => {
        if(error) {
          response.send(error);
          return;
        }
        console.log('new tweet!', result)
        response.redirect('/home')
      }
    }
    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        registerPage: registerControllerCallback,
        loginPage: loginControllerCallback,
        home: homeControllerCallback,
        register: registerNewUserCallback,
        login: loginUserCallBack,
        newTweetPage: newTweetControllerCallback,
        newTweetPost: newTweetPostCallBack
    };

}