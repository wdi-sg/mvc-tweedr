module.exports = (db) => {
var sha256 = require('js-sha256');
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */


    let loginControllerCallback = (request, response) => {
        // response.send("Inside loginControllerCallback function");
        response.render('loginpage');
    };

    let newAccountCallback = (request,response) =>{
        // response.send("inside createAccountCallback function");
        response.render('newaccountpage');
    };

    let loginCheckCallback = (request, response) =>{
        // response.send("Inside loginCheckCallback function");
        // response.send(request.body);
        // console.log(request.body);
        db.twitter.getOne(request.body,(error, result)=>{
            // console.log("Error: ", error);
            // console.log("result: ", result);
            if(error){
                console.log('error',error)
            }
            else{
                if(result === null){
                    response.send('create an account');
                }
                else{
                    // response.send('Enter');
                    var user_id = result.id;
                    // console.log(user_id);
                    let currentSessionCookie = sha256(user_id + 'logged_id');
                    console.log(user_id+'----->'+currentSessionCookie);
                    response.cookie('logged_in', currentSessionCookie);
                    // response.send('Enter');
                    console.log("logged_in: "+ currentSessionCookie);
                    response.cookie('loggedin', true);
                    // console.log("loggedin boolean");
                    response.cookie('user_id', user_id);
                    // console.log("user_id: "+user_id);
                    // response.send("OKOKOK");
                    // console.log(response.cookies)
                    response.redirect("/twee_dr/homepage/"+result.id);
                }
            }
        });
    }

    let newAccountCheckCallback = (request,response) =>{
        // response.send("inside new account check function");
        // response.send(request.body);
        db.twitter.newOne(request.body,(error, result)=>{
             console.log('error: ', error);
            // console.log('result: ', result);
            response.redirect('/twee_dr');
        })
    }

    let homePageView = (request,response)=>{
        // response.send("inside homepageView function");
        var userId = request.params.id;
        // console.log(userId);
        let data = {
            id:parseInt(userId)
        }
        if(request.cookies.logged_in === undefined || request.cookies.loggedin === false){
            response.send("Please login or create a new account")
        }
        else{
            db.twitter.getLoginOne(userId,(error,result)=>{
                var outcome = false;
                // console.log(outcome);
                if(error){
                    response.send('error',error);
                }
                else{
                    outcome = true
                    // console.log('outcome is: ', outcome);
                    // console.log(result.rows);
                    data.resultUser = result.rows[0]
                    // console.log(data);
                    if(outcome == true){
                        // console.log("BOOO");
                        db.twitter.getAllTweets((error,result)=>{
                            if(error){
                                response.send('error',error);
                            }
                            else{
                                // console.log(result.rows);
                                data.allTweets = result.rows;
                                // console.log(data);
                                response.render('homepage', data);
                            }
                        });
                    }
                }
            })
        }
    }

    let homePagePostView = (request,response)=>{
        // response.send("Inside homepagepostview function");
        console.log(request.params.id);
        console.log(request.body);
        db.twitter.postTweet(request.body, request.params.id, (error,result)=>{
            if(error){
                response.send('error',error);
            }
            else{
                response.redirect('/twee_dr/homepage/'+request.params.id);
            }
        })
    }

    let profilePageView = (request,response)=>{
        if (request.cookies.loggedin === 'false' || request.cookies.loggedin === undefined) {
            console.log(request.cookies.loggedin)
            response.send("NO ACCESS!");
        } else {
            // response.send('inside profile page function');
            // console.log(request.params.id);
            let data = {};
            let outcome = false;
            let outcome2 = false;
            let outcome3 = false;
            let outcome4 = false;
            db.twitter.getLoginOne(request.params.id,(error,result)=>{
                if(error){
                    response.send('error',error);
                }
                else{
                    // console.log(result.rows[0]);
                    data.id = request.params.id;
                    data.user = result.rows[0];
                    // outcome = true;
                    // console.log(data);
                    if(outcome = true){
                        db.twitter.getUserWorkData(request.params.id,(error,result2)=>{
                            if(error){
                                response.send('error',error)
                            }
                            else{
                                // console.log(result2.rows[0]);
                                data.userWork = result2.rows[0];
                                // console.log(data);
                                outcome2 = true;
                                if(outcome2 = true){
                                    db.twitter.getUserSchoolData(request.params.id,(error,result3)=>{
                                        if (error){
                                            response.send('error',error)
                                        }
                                        else{
                                            // console.log(result3.rows[0]);
                                            data.userSchool = result3.rows[0];
                                            outcome3 = true;
                                            if(outcome3 = true){
                                                db.twitter.getUserPhotoData(request.params.id,(error,result4)=>{
                                                    if(error){
                                                        response.send('error',error)
                                                    }
                                                    else{
                                                        // console.log(result4.rows);
                                                        data.userPhoto = result4.rows;
                                                        // console.log(data);
                                                        outcome4 = true;
                                                        if(outcome4 = true){
                                                            db.twitter.getUserTweetsData(request.params.id,(error,result5)=>{
                                                                if(error){
                                                                    response.send('error',error);
                                                                }
                                                                else{
                                                                    // console.log(result5.rows);
                                                                    data.userTweets = result5.rows;
                                                                    console.log(data);
                                                                    response.render('profilepage',data);
                                                                }
                                                            })
                                                        }
                                                    }
                                                })
                                            }
                                        }
                                    })
                                }
                            }
                        })
                    }
                }
            })
        }
    }

    let profileLogout = (request,response)=>{
        // response.send("inside logout function")
        response.cookie('loggedin',false);
        // response.send(request.cookies.loggedin)
        response.redirect("/twee_dr");
    }

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    login: loginControllerCallback,
    newAccount: newAccountCallback,
    loginCheck: loginCheckCallback,
    newAccountCheck: newAccountCheckCallback,
    homePage: homePageView,
    homePagePost: homePagePostView,
    profilePage: profilePageView,
    logout: profileLogout
  };

}