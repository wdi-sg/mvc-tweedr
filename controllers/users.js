const sha256 = require('js-sha256');
const SALT = 'CARROT IS BOTH FRUIT AND VEGGIE';
module.exports = function(db) {
   /* ===========================================
   * Controller logic
   * ===========================================
   */
 
  let loginHandler = function(request, response) {

        response.render('user/login');
    // } else {
    //     response.redirect('/');
    // }
  };


  let verifyHandler = function(request, response) {
    // console.log(request.body);
    let data = {
      name: request.body.name,
      password: sha256(request.body.password + SALT),

    };
    

    db.users.getInfo(data,(err, result)=>{
      let passwordHashed = sha256(result.rows[0].password +SALT);
      if (result.rows.length === 1 & passwordHashed === data.password) {
        response.cookie('name', result.rows[0].name);
        response.cookie('loggedIn', sha256(result.rows[0].name + SALT));
      

        response.redirect('/');
      } else {
        response.send('Login Failure');
      }
    });

   
      
  };

  let logoutHandler = function(request, response) {
      
    response.clearCookie('username', request.cookies['username']);
    response.clearCookie('loggedIn', request.cookies['loggedIn']);
    response.clearCookie('email', request.cookies['email']);
  

    response.redirect('/login');
  };

  let registerHandler = function(request, response) {
    
        response.render('user/register');
    
  };

  let newAccountHandler = (request, response) =>{
    let data = request.body;
    db.users.createAccount(data,(err, result)=>{
      console.log('done');
      if(result === null){
        response.status(403).send("Username already exist!");
      } else {
        
        response.redirect("/login");
      };  
    });
  };



  let registerNewUser = (request, response) => {
        let data = [request.body.screen_name, hashFunc(request.body.password), request.body.avatar];
        db.queryMod.addUser(data, (error, results) => {
            if (results === null) {
                response.status(403).send("<h1>DUPLICATE SCREEN NAME. CHOOSE ANOTHER</h1>");
            } else {
                giveCookie(results[0].id, request.body.screen_name, response);
                db.queryMod.getAll((error, allResults) => {
                    console.log(allResults);
                    response.render('main/index', {
                        allResults
                    });
                });
            }
        });
    };


  let mainTweetHandler = (request, response) =>{
    db.users.getAllTweets((err, result)=> {

    response.send(result);
  });
};
  





       // console.log(db.users.getAllTweets());
    // if (request.cookies === true) {

      // let allTweets = db.users.getAllTweets();
      // // console.log(allTweets);
      // response.send(allTweets);
      // // let data = {
      //     'tweets': allTweets,
      // }

        // response.render('tweets/index', data);
    // } else {
    //     response.render('user/login');
    // }

   
  // };

  let createTweetHandler = function(err,request, response) {

    if(err){
      console.log('err');
    } else if(request.cookies === true){
        response.render('user/login');
    }
  };




  return {
    loginHandler,
    verifyHandler,
    logoutHandler,
    registerHandler,
    newAccountHandler,
    mainTweetHandler,
    createTweetHandler
  };
}




