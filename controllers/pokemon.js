module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */



  /**
   * ===========================================
   * Register PAGE
   * ===========================================
   */
  let registerPage = (request, response) => {
    let user = request.cookies.user_name
      var data = {
        route:"/register",
        header: "Register",
        user:user
    }
        response.render('login/login:Register',data);
  };

//--------Getting NEW user-----------
  let getNew = (request,response) => {

    var data = {
        name: request.body.username,
        password: request.body.password
    }

    db.key.registerUser(data,(error, res)=>{
        let user = request.cookies.user_name
        console.log(res)
        let hashedCookie = request.body.username;
        let user_name = res.rows[0].name;
        let user_id = res.rows[0].id;

        response.cookie('loggedIn', hashedCookie);
        response.cookie('userId', user_id);
        response.cookie('user_name', user_name);
        response.redirect('/')
    })
  }



    /**
   * ===========================================
   * LOGIN PAGE
   * ===========================================
   */

  let loginPage = (request, response) => {
    let user = request.cookies.user_name
      var data = {
        route:"/login",
        header: "Login",
        user:user
    }
        response.render('login/login:Register',data);

  };

//--------- Logging in user-----------
  let checkUser = (request,response)=>{
    var data = {
        name: request.body.username,
        password: request.body.password

    };
    db.key.loginUser(data, (err,res)=>{
        if(res.rows.length === 0){
            console.log(err);
            response.status(400).send("Invalid Username ");
        } else {
            if(res.rows[0].password === request.body.password){
                 let hashedCookie =request.body.username;
                let user_name = res.rows[0].name;
                let user_id = res.rows[0].id;

                response.cookie('loggedIn', hashedCookie);
                response.cookie('userId', user_id);
                response.cookie('user_name', user_name);
            response.redirect('/');
            }
        }
    })
  }

      /**
   * ===========================================
   * Tweet PAGE
   * ===========================================
   */
   let profilePage = (request,response)=>{
        let user = request.cookies.user_name
        let id = request.cookies.userId
        let data = {
                id:id,
                user:user
                }
                console.log(data.id)
        db.key.getTweet(data,(err,res)=>{
             data = {
                id:id,
                user:user,
                tweets:res.rows
                }
        response.render('tweet/profilepage',data)
        })
   }

   let addTweet = (request,response)=>{
    let id = request.cookies.userId
    let tweet = request.body.tweet
    let data = {
        id:id,
        tweet:tweet
    };
    db.key.addTweet(data, (err, res)=>{
        response.redirect('/profile')
    })
   }



    /**
   * ===========================================
   * HOME PAGE
   * ===========================================
   */
   let homePage = (request,response)=>{
         let user = request.cookies.user_name
        let id = request.cookies.userId
        db.key.getAllTweet((err,res)=>{
             data = {
                id:id,
                user:user,
                tweets:res.rows
                }
        response.render('tweet/homePage',data)
        })

   }


    /**
   * ===========================================
   * LOGOUT PAGE
   * ===========================================
   */

    let logOut = (request, response) => {
        response.clearCookie("loggedIn");
        response.clearCookie("userId");
        response.clearCookie("user_name");
        response.redirect('/');
        response.render('login/login:Register');
  };



  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    registerPage: registerPage,
    getNew:getNew,

    loginPage: loginPage,
    checkUser:checkUser,

    logOut:logOut,

    profilePage:profilePage,
    addTweet:addTweet,

    homePage:homePage
  };

}