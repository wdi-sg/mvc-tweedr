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
            console.log("this is login error: ",error);
            response.send(loginUser);
        }

        db.tweedr.loginUser(callBack,data);
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
        login: login
    };

}