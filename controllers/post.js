const SALT = "PUTANG INA MO";
var sha256 = require('js-sha256');
var cloudinary = require('cloudinary');
var multer = require('multer');
var upload = multer({ dest: './uploads/' });

cloudinary.config({
  cloud_name: 'kach92',
  api_key: '677382927843856',
  api_secret: 'EXaEnYUuH-Xu7qqtNVdNTaTLL4c'
});
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
            if (result === null) {
                response.send('USER DOESNT EXISTS');

            } else if (result.length > 0) {

                response.cookie("user_id", result[0].id);
                response.cookie("user_name", result[0].name);
                response.cookie("logged_in", sha256(result[0].id + 'logged_in' + SALT));
                response.redirect('/tweedr');
            }


        });
    }

    let addTweetPostCallback = (request, response) => {
        db.tweedr.addTweet(request.body, (error, result) => {

            if (result) {
                response.redirect("/tweedr");
            } else {
                response.send("gg");
            }

        })


    }

    let followPostCallback = (request, response) => {
        db.tweedr.follow(request.params.id, request.body.user_id, (error, result) => {

            if (result) {
                response.redirect("/tweedr/" + request.params.id);
            } else {
                response.send("gg");
            }

        })
    }

    let editTweetPostCallback = (request, response) => {
        db.tweedr.editTweet(request.body.tweet_id, request.body.tweet, (error, result) => {

            if (result) {
                response.redirect("/tweedr/");
            } else {
                response.send("gg");
            }

        })
    }

    let deleteTweetPostCallback = (request, response) => {
        db.tweedr.deleteTweet(request.body.tweet_id, (error, result) => {

            if (result) {
                response.redirect("/tweedr/");
            } else {
                response.send("gg");
            }

        })
    }

    let changeProfilePicPostCallback = (request, response) => {
        let user_id = request.body.user_id;
        let url = "/tweedr/"+user_id
        cloudinary.uploader.upload(request.file.path, function(result) {
            db.tweedr.loadProfilePic(result.url, user_id, (error, result2) => {

                if (result2) {
                    response.redirect(url);
                } else {
                    response.send("gg");
                }
            });

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
        add_tweet_post: addTweetPostCallback,
        follow: followPostCallback,
        edit_tweet: editTweetPostCallback,
        delete_tweet: deleteTweetPostCallback,
        change_profile_pic_post: changeProfilePicPostCallback
    };

}