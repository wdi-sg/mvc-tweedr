const { response } = require("express");

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let indexControllerCallback = (request, response) => {
      db.twitter.getAll((error, allTweets) => {
        response.render('./twitter/login', { allTweets });
      });
  };

  let register =(request,response)=>{
      let name = request.body.name;
      let pw = request.body.pw;
      db.twitter.getRegister(name,pw,(error,result)=>{
        response.redirect('/')
      })
  }

  let login =(request,res)=>{
    let name = request.body.name;
    let pw = request.body.pw;
    db.twitter.getLogin(name,pw,(err,result)=>{
      if (result === "KEY IN SOMETHING THAT WORKS RETARD" || result === "ERROR YOUR FACE"){
        res.status(404).send(result)
      } else{
        res.cookie('username',result.username);
        res.cookie('id',result.id);
        res.cookie('logIn', 'true');
        res.redirect('/home')
      }
    })
  }

  let logout = (request,response) =>{
    console.log('oing');
    response.clearCookie('username');
    response.clearCookie('id');
    response.cookie('logIn','false');
    response.send('GO TO HELL')
  }

  let tweet = (request,response) =>{
    let tweet = request.body.tweets;
    let id = request.cookies.id;
    db.twitter.getTweet(tweet,id,(err,result)=>{
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
       db.twitter.getHome(id,(err,result)=>{
         if (err){
           response.status(404).send('fucking hell')
         } else {response.render('./twitter/home',result)}
       })
    } else{
      response.send("DO YOU KNOW HOW TO LOG IN????")
    }
  }

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
    register,
    login:login,
    logout,
    home,
    tweet,

  };

}
