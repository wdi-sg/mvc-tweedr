module.exports = (db) => {

let allTweets = (request, response) => {
      db.tweets.getAllTweets((error, allTweets) => {
        response.render('login', { allTweets });
      });
  };

  let register = (request,response)=>{
      let {username,password} = request.body;
      db.tweets.getRegister(username,password,(error,result)=>{
        response.redirect('/')
      })
  }

  let login = (request,response)=>{
    let {username,password} = request.body;
    db.tweets.getLogin(username,password,(err,result)=>{
      if (result === "too short" || result === "wrong password"){
        res.status(404).send(result)
      } else{
        response.cookie('username',result.username);
        response.cookie('id',result.id);
        response.cookie('logIn', 'true');
        response.redirect('/home')
      }
    })
  }

  let logout = (request,response) =>{
    response.clearCookie('username');
    response.clearCookie('id');
    response.cookie('logIn','false');
    response.send('logged out of tweedr')
  }

  let tweet = (request,response) =>{
    let tweet = request.body.tweets;
    let id = request.cookies.id;
    let username = request.cookies.username
    db.tweets.getTweet(tweet,id,username,(err,result)=>{
      if (err){
        console.log("err in tweet controller", err.message)
      } else {
        response.redirect('/home')
      }
    })
  }

  let home = (request,response)=>{
    if(request.cookies.logIn === 'true'){
       let id = request.cookies.id
       db.tweets.getHome(id,(err,result)=>{
         if (err){
           response.status(404).send('error!')
         } else {
            console.log(result.rows)
            response.render('home',{tweets:result.rows})
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
    allTweets,
    register,
    login,
    logout,
    home,
    tweet,

  };

}