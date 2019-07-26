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
                    console.log("loggedin boolean");
                    response.cookie('user_id', user_id);
                    console.log("user_id: "+user_id);
                    // response.send("OKOKOK");
                    // console.log(response.cookies)
                    response.redirect("/homepage");
                }
            }
        });
    }

    let newAccountCheckCallback = (request,response) =>{
        // response.send("inside new account check function");
        // response.send(request.body);
        db.twitter.newOne(request.body,(error, result)=>{
            // console.log('error: ', error);
            // console.log('result: ', result);
            response.redirect('/login');
        })
    }

    let homePageView = (request,response)=>{
        // response.send("inside homepageView function");
        console.log(request.cookies);
        if(request.cookies.logged_in === undefined){
            response.send("Please login or create a new account")
        }
        else{
            db.twitter.getLoginOne(request.cookies.user_id,(error,result)=>{
                if(error){
                    response.send('error',error);
                }
                else{
                    // console.log(result.rows[0]);
                    let data = {
                        result : result.rows[0]
                    }
                    console.log(data);
                    // response.render('homepage', result);
                    response.send("YAYA");
                }
            })
        }
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
    homePage: homePageView
  };

}