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

    let register = (request,response) => {
        
        let data = {
            name: request.body.username,
            password: request.body.password
        }
        
        var callBack = (error, registeredUser) => {
            response.send('SUCCESS!!!!')
        }

        db.tweedr.register(callBack, data)
    }

    let registerForm = (request,response) => {
        response.render('tweedr/register');
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
    };

}