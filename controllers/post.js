const SALT = "PUTANG INA MO";
var sha256 = require('js-sha256');
module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */
    let addUserCallback = (request, response) => {

        db.tweedr.registerUser(request.body, (error, result) => {
            if (result === true) {
                response.redirect('/tweedr/login');
            } else {
                response.send('USER ALREADY EXISTS');
            }


        });
    };

    let logInUserCallback = (request, response) => {
        db.tweedr.logInUser(request.body, (error, result) => {
            if (result.length>0) {
                response.cookie("user_id",result[0].id);
                response.cookie("user_name",result[0].name);
                response.cookie("logged_in", sha256(result[0].id+'logged_in'+SALT));
                response.redirect('/tweedr');

            } else {
                response.send('USER DOESNT EXISTS');
            }


        });
    }

    let addTweetPostCallback = (request, response) => {
        db.tweedr.addTweet(request.body, (error, result) => {

            if(result){
                response.redirect("/tweedr");
            }else{
                response.send("gg");
            }

        })


    }




    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        add_user: addUserCallback,
        login_user: logInUserCallback,
        add_tweet_post:addTweetPostCallback
    };

}