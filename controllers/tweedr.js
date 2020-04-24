module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let test = (request,response) => {
        db.tweedr.getAll((error, allTweets) => {
            response.send(allTweets);
            // response.render('FOLDERPATH/FILENAME',DATA(OPTIONAL))
        });
    }

    let registerForm = (request,response) => {
        response.render('tweedr/register');
    }

    let loginForm = (request,response) => {
        response.render('tweedr/login');
    }

    let postForm = (request,response) => {
        response.render('tweedr/post');
    }

    let register = (request,response) => {

        let data = {
            name: request.body.username,
            password: request.body.password
        }
        
        let callBack = (error, registeredUser) => {
            console.log("this is register error: ",error);
            response.send(registeredUser)
        }

        db.tweedr.registerUser(callBack, data)
    }

    let login = (request,response) => {
        let data = {
            name: request.body.username,
            password: request.body.password
        }

        let callBack = (error, loginUser) => {
            console.log("this is login error: ", error);

            if (loginUser === null){
                response.send("does not exist");
            } else {
                let userID = loginUser[0].id;
                let username = loginUser[0].name;
                let loggedIn = true;

                response.cookie("userID", userID);
                response.cookie("username", username);
                response.cookie("loggedIn", loggedIn);
    
                response.send(loginUser);
            }
        }

        db.tweedr.loginUser(callBack,data);
    }

    let post = (request,response) => {

        let data = {
            tweet: request.body.tweet,
            userID : request.cookies.userID,
            username : request.cookies.username,
            loggedIn : request.cookies.loggedIn
        };

        console.log("this is data", data.userID);

        let callBack = (error, postTweet) => {
            console.log("this is post error: ", error);
                response.send(postTweet[0].content);
        }

        db.tweedr.postTweets(callBack,data);
    }



    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        test: test,
        register: register,
        registerForm: registerForm,
        loginForm: loginForm,
        login: login,
        post: post,
        postForm: postForm
    };

}